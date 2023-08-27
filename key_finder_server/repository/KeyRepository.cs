using KeyFinder.Core.Entity;
using KeyFinder.Core.Repository;

namespace KeyFinder.Repository;

public class KeyRepository : RepositoryBase<Key>, IKeyRepository
{
    public KeyRepository(AppDbContext context) : base(context)
    {
    }
}