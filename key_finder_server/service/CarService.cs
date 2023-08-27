using core.Exceptions;
using KeyFinder.Core.Adapters;
using KeyFinder.Core.Dto;
using KeyFinder.Core.Entity;
using KeyFinder.Core.Repository;
using KeyFinder.Core.Service;

namespace KeyFinder.Service;

public class CarService : ICarService
{
    private readonly ICarRepository _carRepository;
    private readonly IUserRepository _userRepository;
    private readonly IKeyRepository _keyRepository;
    private readonly IShareHolderRepository _shareHolderRepository;

    public CarService(
        ICarRepository carRepository,
        IUserRepository userRepository,
        IKeyRepository keyRepository,
        IShareHolderRepository shareHolderRepository)
    {
        _carRepository = carRepository;
        _userRepository = userRepository;
        _keyRepository = keyRepository;
        _shareHolderRepository = shareHolderRepository;
    }

    public async Task<CarDto> CreateCar(CarDto carDto, long userId)
    {
        var car = CarAdapter.ToCar(carDto);
        var user = await _userRepository.GetById(userId);
        if (user == null)
        {
            throw new UserNotFoundException("Invalid user!");
        }

        car.Owner = user;
        var savedCar = await _carRepository.Insert(car);
        await CreateMainKey(savedCar, user);
        await CreateShareHolder(savedCar, user);
        return CarAdapter.ToCarDto(savedCar);
    }

    private async Task CreateMainKey(Car savedCar, User user)
    {
        var carKey = new Key
        {
            Name = "Main",
            Car = savedCar,
            Member = user
        };
        await _keyRepository.Insert(carKey);
    }

    private async Task CreateShareHolder(Car savedCar, User user)
    {
        var shareHolder = new ShareHolder
        {
            Car = savedCar,
            Member = user
        };
        await _shareHolderRepository.Insert(shareHolder);
    }

    public Task<Car> ChangeLicensePlate(long carId, string newPlate)
    {
        throw new NotImplementedException();
    }

    public Task<Car> ChangeOwner(long carId, long userId, long newOwnerId)
    {
        throw new NotImplementedException();
    }

    public async Task AddShareHolder(long carId, long userId, long newMemberId)
    {
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

        var existingEntry = await _shareHolderRepository.GetExistingEntry(car, member);
        if (existingEntry != null)
        {
            throw new AlreadyExistException("Already a share holder");
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

    public Task<bool> ClaimKey(long keyId, long userId)
    {
        throw new NotImplementedException();
    }

    public Task<bool> TransferKey(long keyId, long userId, long newKeyHolderId)
    {
        throw new NotImplementedException();
    }

    public Task<CarDto> GetCarSummary(long carId, long userId)
    {
        throw new NotImplementedException();
    }
}