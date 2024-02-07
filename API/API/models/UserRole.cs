using Microsoft.AspNetCore.Identity;

namespace API.models
{
    public class UserRole : IdentityUserRole<Guid>
    {
        public virtual Role? Role { get; set; }
        public virtual User? User { get; set; }

    }
}
