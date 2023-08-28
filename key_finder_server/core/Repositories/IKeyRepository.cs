using KeyFinder.Core.Entity;

namespace KeyFinder.Core.Repository;

public interface IKeyRepository : IRepositoryBase<Key>
{
    Task<List<Key>> GetKeysByCar(long carId);
}