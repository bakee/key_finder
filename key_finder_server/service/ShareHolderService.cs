using core.Exceptions;
using KeyFinder.Core.Entity;
using KeyFinder.Core.Repository;
using KeyFinder.Core.Service;

namespace KeyFinder.Service;

public class ShareHolderService : IShareHolderService
{
    private readonly ICarRepository _carRepository;
    private readonly IUserRepository _userRepository;
    private readonly IShareHolderRepository _shareHolderRepository;

    public ShareHolderService(
        ICarRepository carRepository,
        IUserRepository userRepository,
        IShareHolderRepository shareHolderRepository)
    {
        _carRepository = carRepository;
        _userRepository = userRepository;
        _shareHolderRepository = shareHolderRepository;
    }

    public async Task AddShareHolder(long carId, long userId, long newMemberId)
    {
        var existingEntry = await _shareHolderRepository.GetExistingEntry(carId, newMemberId);
        if (existingEntry != null)
        {
            throw new AlreadyExistException("Already a share holder");
        }
        
        var car = await _carRepository.GetById(carId);
        if (car == null)
        {
            throw new NotFoundException("Car does not exist");
        }

        if (car.Owner.Id != userId)
        {
            throw new InsufficientPermissionException("You must be the owner to perform this operation");
        }

        var member = await _userRepository.GetById(newMemberId);
        if (member == null)
        {
            throw new NotFoundException("Member does not exist");
        }

        var shareHolder = new ShareHolder
        {
            Car = car,
            Member = member
        };
        await _shareHolderRepository.Insert(shareHolder);
    }

    public Task<bool> RemoveShareHolder(long carId, long userId, long oldMemberId)
    {
        throw new NotImplementedException();
    }
}