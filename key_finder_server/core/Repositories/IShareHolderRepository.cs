using KeyFinder.Core.Entity;

namespace KeyFinder.Core.Repository;

public interface IShareHolderRepository : IRepositoryBase<ShareHolder>
{
    Task<ShareHolder?> GetExistingEntry(Car car, User member);
}