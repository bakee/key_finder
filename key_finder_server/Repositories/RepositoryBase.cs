public class RepositoryBase<T> : IRepositoryBase<T>
{
    protected readonly AppDbContext _context;
    public RepositoryBase(AppDbContext context) {
        this._context = context;
    }

    public async Task Delete(T entity)
    {
        //_context.Remove(entity);
    }

    public async Task<IEnumerable<T>> GetAll()
    {
        //_context.FindAsync()
        return null;
    }

    public Task<T> GetById(long id)
    {
        throw new NotImplementedException();
    }

    public Task<T> Insert(T entity)
    {
        throw new NotImplementedException();
    }

    public Task<T> Update(T entity)
    {
        throw new NotImplementedException();
    }
}