using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using API.models;
using API.Controllers;

namespace API.DBContext
{
    public class AppDBContext : IdentityDbContext<User, Role, Guid,
                IdentityUserClaim<Guid>, UserRole, IdentityUserLogin<Guid>,
                IdentityRoleClaim<Guid>, IdentityUserToken<Guid>>
    {
        public AppDBContext(DbContextOptions<AppDBContext> options)
        : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        public DbSet<User> Users { get; set; }
        public  DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Comment> Comments { get; set; }

    }   
}
