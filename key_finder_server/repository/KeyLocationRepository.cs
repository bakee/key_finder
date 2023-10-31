using KeyFinder.Core.Entity;
using KeyFinder.Core.Repository;
using Microsoft.EntityFrameworkCore;

namespace KeyFinder.Repository;

public class KeyLocationRepository : RepositoryBase<KeyLocation>, IKeyLocationRepository
{
    public KeyLocationRepository(AppDbContext context) : base(context)
    {
    }

    public async Task<List<KeyLocation>> GetHistory(long carId)
    {
        return await All()
        .Where(kl => kl.Key.Car.Id == carId)
        .Include(kl => kl.Key)
        .Include(kl => kl.Member)
        .Include(kl => kl.PreviousMember)
        .OrderByDescending(kl => kl.Created)
        .Take(10)
        .ToListAsync();
    }
}