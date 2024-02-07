using API.DBContext;

namespace API.Service
{
    public interface IService<T> where T : class
    {
        Task<T> GetById(int id);
        Task<T> GetByConition(Func<T, bool> condition);
        Task<T> Add(T entity);
        Task<T> Update(T entity);
        Task<bool> Delete(int id);
        Task<IEnumerable<T>> GetAll( Func<T, bool>? condition);

    }
}
