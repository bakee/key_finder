using KeyFinder.Core.Entity;

namespace KeyFinder.Core.Repository;

public interface IShareHolderRepository : IRepositoryBase<ShareHolder>
{
    Task<ShareHolder?> GetExistingEntry(long carId, long memberId);
    Task<List<Car>> GetAllCarsForMember(long userId);
    Task<List<User>> GetAllMembersForCar(long carId);
}