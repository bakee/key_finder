using KeyFinder.Core.Entity;
using KeyFinder.Core.Repository;
using Microsoft.EntityFrameworkCore;

namespace KeyFinder.Repository;

public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : EntityBase
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

    protected abstract IQueryable<T> All();

    public async Task<IEnumerable<T>> GetAll()
    {
        return  await All().ToListAsync();
    }

    public async Task<T> GetById(long id)
    {
        return await All()
            .Where(e => e.Id == id)
            .FirstOrDefaultAsync();
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