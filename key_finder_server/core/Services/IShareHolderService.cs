namespace KeyFinder.Core.Service;

public interface IShareHolderService
{
    Task AddShareHolder(long carId, long userId, long newMemberId);
    Task<bool> RemoveShareHolder(long carId, long userId, long oldMemberId);
}