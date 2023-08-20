public interface IRepositoryBase<T>
{
    public Task<IEnumerable<T>> GetAll();
    public Task<T> GetById(long id);
    public Task<T> Insert(T entity);
    public Task<T> Update(T entity);
    public Task Delete(T entity);
}