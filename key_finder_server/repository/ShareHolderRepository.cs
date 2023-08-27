using KeyFinder.Core.Entity;
using KeyFinder.Core.Repository;
using Microsoft.EntityFrameworkCore;

namespace KeyFinder.Repository;

public class ShareHolderRepository : RepositoryBase<ShareHolder>, IShareHolderRepository
{
    public ShareHolderRepository(AppDbContext context) : base(context)
    {
    }

    public async Task<ShareHolder?> GetExistingEntry(Car car, User member)
    {
        return await All()
            .Where(sh => sh.Car == car && sh.Member == member)
            .FirstOrDefaultAsync();
    }
}