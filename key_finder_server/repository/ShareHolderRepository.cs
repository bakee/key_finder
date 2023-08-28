using KeyFinder.Core.Entity;
using KeyFinder.Core.Repository;
using Microsoft.EntityFrameworkCore;

namespace KeyFinder.Repository;

public class ShareHolderRepository : RepositoryBase<ShareHolder>, IShareHolderRepository
{
    public ShareHolderRepository(AppDbContext context) : base(context)
    {
    }

    public async Task<ShareHolder?> GetExistingEntry(long carId, long memberId)
    {
        return await All()
            .Where(sh => sh.Car.Id == carId && sh.Member.Id == memberId)
            .FirstOrDefaultAsync();
    }

    public async Task<List<Car>> GetAllCarsForMember(long userId)
    {
        return await All()
            .Where(sh => sh.Member.Id == userId)
            .Select(sh => sh.Car)
            .ToListAsync();
    }

    public async Task<List<User>> GetAllMembersForCar(long carId)
    {
        return await All()
            .Where(sh => sh.Car.Id == carId)
            .Select(sh => sh.Member)
            .ToListAsync();
    }
}