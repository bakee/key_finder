using KeyFinder.Core.Entity;
using KeyFinder.Core.Repository;
using Microsoft.EntityFrameworkCore;

namespace KeyFinder.Repository;

public class KeyRepository : RepositoryBase<Key>, IKeyRepository
{
    public KeyRepository(AppDbContext context) : base(context)
    {
    }

    public async Task<List<Key>> GetKeysByCar(long carId)
    {
        return await All()
            .Where(k => k.Car.Id == carId)
            .ToListAsync();
    }
}
