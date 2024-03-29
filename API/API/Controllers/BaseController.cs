﻿using API.models;
using API.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using API.Helpers;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore.Diagnostics;
using API.Controllers;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {
        private readonly IService<User> _userService;
        private readonly IService<Post> _postService;   
        private readonly UserManager<User> _userManager;

        public BaseController(IService<User> userService, UserManager<User> userManager, IService<Post> postService) : base()
        {
            _userService = userService;
            _userManager = userManager;
            _postService = postService;
        }

        [Authorize]
        public async override Task<PostResponse> AddPost([FromBody] Post body)
        {
            body.UserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            User user = await _userManager.FindByIdAsync(body.UserId);
            Post post = await _postService.Add(body);
            return new PostResponse
            {
                Post = post,
                User = new UserDTO
                {
                    Email = user.Email,
                    UserName = user.UserName,
                    Id = user.Id.ToString()
                }
            };
        }

        [Authorize]
        public async override Task<IEnumerable<PostResponse>> GetPosts()
        {
            IEnumerable<Post> postList =  await _postService.GetAll(null);
            return await Task.WhenAll(postList.Select(async (post) =>
            {
                User user = await _userService.GetByConition(user =>user.Id.ToString().Equals(post.UserId));
                return new PostResponse()
                {
                    Post = post,
                    User = new UserDTO
                    {
                        Email = user.Email,
                        UserName = user.UserName,
                        Id = user.Id.ToString()
                    }
                };
            }));
        }

        public async override Task<UserDTO> GetUserById(string id)
        {
            User user = await _userManager.FindByIdAsync(id);
            return new UserDTO
            {
                Email = user.Email,
                UserName = user.UserName,
                Id = user.Id.ToString(), 
            };
        }

        public async override Task<CreateEntityResponse> RegisterUser([FromBody] RegistrationDTO body)
        {
            var userNameExists = await _userManager.FindByNameAsync(body.UserName);
            if (userNameExists != null)
            {
                return new CreateEntityResponse()
                {
                    Message = "User name already exists!",
                    Result = false
                };
            }
                
            var EmailExists = await _userManager.FindByEmailAsync(body.Email);
            if (EmailExists != null)
            {
                return new CreateEntityResponse()
                {
                    Message = "Email already used!",
                    Result = false
                };
            }

            User user = new User();
            user.Email = body.Email;
            user.UserName = body.UserName;

            var result = await _userManager.CreateAsync(user, body.Password);
            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, "User");  
            }

            if (!result.Succeeded)
            {
                return new CreateEntityResponse()
                {
                    Message = "User creation failed!",
                    Result = false
                };
            }

            return new CreateEntityResponse
            {
                Message = "Ok!",
                Result = true
            };
        }

        public async override Task<TokenResponse> Login([FromBody] UserLoginDTO body)
        {
            var user = await _userService.GetByConition(user => user.Email == body.Email);
            if (user != null && await _userManager.CheckPasswordAsync(user, body.Password))
            {
                IEnumerable<string> roles = await _userManager.GetRolesAsync(user);
                var tokenHandler = new JwtSecurityTokenHandler();
                SecurityToken token = JwtTokenGeneratorcs.GenerateJwtToken(user, roles);
                return new TokenResponse() { Token = tokenHandler.WriteToken(token) };
            }

            return new TokenResponse();
        }

        [Authorize]
        public async override Task<UserDTO> Profile()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            User user = await _userManager.FindByIdAsync(userId);
            return new UserDTO
            {
                Email = user.Email,
                UserName = user.UserName,
                Id = user.Id.ToString()
            };

        }
    }
}
