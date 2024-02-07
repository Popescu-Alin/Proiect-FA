using API.DBContext;
using API.models;

namespace API.Service
{
    public class UserService : IService<User>
    {

        private readonly AppDBContext _conetex;
        public UserService(AppDBContext context){
            _conetex = context;
        }

        public async Task<User> Add(User entity)
        {
            User user = _conetex.Users.Add(entity).Entity;
            return user;
        }

        public async Task<bool> Delete(int id)
        {
            User user = await _conetex.Users.FindAsync(id);
            if (user == null)
            {
                return false;
            }
            _conetex.Users.Remove(user);
            _conetex.SaveChanges();
            return true;
            
        }

        public async Task<IEnumerable<User>> GetAll(Func<User, bool> condition )
        {
            if(condition != null)
            {
                return _conetex.Users.Where(condition);
            }
            return _conetex.Users;
        }

        public async Task<User> GetByConition(Func<User, bool> condition)
        {
            return _conetex.Users.Where(condition).FirstOrDefault() ;
        }

        public async Task<User> GetById(int id)
        { 
            return await _conetex.Users.FindAsync(id);
        }

        public async Task<User> Update(User entity)
        {
            User user = await _conetex.Users.FindAsync(entity.Id);
            if(user == null)
            {
                return user;
            }

            user.UserName = entity.UserName;
            user.Email = entity.Email;
            user.PasswordHash = entity.PasswordHash;
            user.NormalizedEmail = entity.NormalizedEmail;
            user.NormalizedUserName = entity.NormalizedUserName;
                
            _conetex.SaveChanges();
            return user;

        }
    }
}
