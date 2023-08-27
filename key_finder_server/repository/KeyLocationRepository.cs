using KeyFinder.Core.Entity;
using KeyFinder.Core.Repository;

namespace KeyFinder.Repository;

public class KeyLocationRepository : RepositoryBase<KeyLocation>, IKeyLocationRepository
{
    public KeyLocationRepository(AppDbContext context) : base(context)
    {
    }
}