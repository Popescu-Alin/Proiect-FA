using Microsoft.AspNetCore.Identity;

namespace API.models
{
    public class Role : IdentityRole<Guid>
    {
        public ICollection<UserRole> UserRoles { get; set; }
    }
}
