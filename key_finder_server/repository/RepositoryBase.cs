using KeyFinder.Core.Repository;

namespace KeyFinder.Repository;

public class RepositoryBase<T> : IRepositoryBase<T>
{
    protected readonly AppDbContext _context;
    public RepositoryBase(AppDbContext context)
    {
        _context = context;
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

    public async Task<T> Insert(T entity)
    {
        await _context.AddAsync(entity);
        await _context.SaveChangesAsync();
        return entity;
    }

    public Task<T> Update(T entity)
    {
        throw new NotImplementedException();
    }
}