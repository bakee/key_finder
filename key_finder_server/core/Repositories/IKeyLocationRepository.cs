using KeyFinder.Core.Entity;

namespace KeyFinder.Core.Repository;

public interface IKeyLocationRepository : IRepositoryBase<KeyLocation>
{
    Task<List<KeyLocation>> GetHistory(long carId);
}