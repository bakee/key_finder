using KeyFinder.Core.Entity;
using KeyFinder.Core.Repository;
using Microsoft.EntityFrameworkCore;

namespace KeyFinder.Repository;

public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : EntityBase
{
    private readonly AppDbContext _context;
    private readonly DbSet<T> _set;

    protected RepositoryBase(AppDbContext context)
    {
        _context = context;
        _set = _context.Set<T>();
    }

    public async Task Delete(T entity)
    {
        _set.Remove(entity);
        await Save();
    }

    protected IQueryable<T> All()
    {
        return _set.AsQueryable();
    }

    public async Task<IEnumerable<T>> GetAll()
    {
        return  await All().ToListAsync();
    }

    public virtual async Task<T?> GetById(long id)
    {
        return await All()
            .Where(e => e.Id == id)
            .FirstOrDefaultAsync();
    }

    public async Task<T> Insert(T entity)
    {
        await _set.AddAsync(entity);
        await Save();
        return entity;
    }

    private async Task Save()
    {
        await _context.SaveChangesAsync();
    }

    public async Task<T> Update(T entity)
    {
        _context.Entry(entity).State = EntityState.Modified;
        await Save();
        return entity;
    }
}