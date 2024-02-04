using Microsoft.AspNetCore.Identity;

namespace API.models
{
    public class User : IdentityUser<Guid>
    {
        public User() : base() { }
    }
}
