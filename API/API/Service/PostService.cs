using API.Controllers;
using API.DBContext;
using Microsoft.EntityFrameworkCore;

namespace API.Service
{
    public class PostService : IService<Post>
    {
        private readonly AppDBContext _context;
           
        public PostService(AppDBContext context)
        {
            _context = context;
        }

        public async Task<Post> Add(Post entity)
        {
            Post post = _context.Posts.Add(entity).Entity;
            await _context.SaveChangesAsync();
            return post;
        }

        public Task<bool> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Post>> GetAll(Func<Post, bool>? condition)
        {
            if (condition == null)
            {
                return _context.Posts.Include(post => post.Comments).ToList();
            }
            return _context.Posts.Include(post => post.Comments).Where(condition);
        
        }

        public async Task<Post> GetByConition(Func<Post, bool> condition)
        {
            return _context.Posts.Include(post=>post.Comments).Where(condition).FirstOrDefault();
        }

        public async Task<Post> GetById(int id)
        {
            return _context.Posts.Find(id);
        }

        public Task<Post> Update(Post entity)
        {
            throw new NotImplementedException();
        }
    }
}
