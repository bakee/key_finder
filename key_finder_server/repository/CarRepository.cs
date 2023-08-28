using KeyFinder.Core.Entity;
using KeyFinder.Core.Repository;
using Microsoft.EntityFrameworkCore;

namespace KeyFinder.Repository;

public class CarRepository : RepositoryBase<Car>, ICarRepository
{
    public CarRepository(AppDbContext context) : base(context)
    {
    }

    public override async Task<Car?> GetById(long id)
    {
        return await All()
            .Where(e => e.Id == id)
            .Include(c => c.Owner)
            .FirstOrDefaultAsync();
    }
}