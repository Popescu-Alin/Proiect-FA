using API.Controllers;

namespace API.Service
{
    public class CommentService : IService<Comment>
    {
        public Task<Comment> Add(Comment entity)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Comment>> GetAll(Func<Comment, bool>? condition)
        {
            throw new NotImplementedException();
        }

        public Task<Comment> GetByConition(Func<Comment, bool> condition)
        {
            throw new NotImplementedException();
        }

        public Task<Comment> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Comment> Update(Comment entity)
        {
            throw new NotImplementedException();
        }
    }
}
