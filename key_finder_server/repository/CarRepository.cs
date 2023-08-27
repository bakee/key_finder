using KeyFinder.Core.Entity;
using KeyFinder.Core.Repository;

namespace KeyFinder.Repository;

public class CarRepository : RepositoryBase<Car>, ICarRepository
{
    public CarRepository(AppDbContext context) : base(context)
    {
    }
}