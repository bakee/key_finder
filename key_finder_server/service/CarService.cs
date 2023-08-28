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

    public async Task<List<CarDto>> GetCarSummary(long userId)
    {
        var cars = await _shareHolderRepository.GetAllCarsForMember(userId);
        return cars.Select(CarAdapter.ToCarDto).ToList();
    }

    public async Task<CarDetailDto> GetCarDetail(long carId, long userId)
    {
        var car = await _carRepository.GetById(carId);
        if (car == null)
        {
            throw new NotFoundException("Car not found!");
        }

        var existingEntry = await _shareHolderRepository.GetExistingEntry(carId, userId);
        if (existingEntry == null)
        {
            throw new InsufficientPermissionException("User does not have access to the car");
        }

        var allMembers = await _shareHolderRepository.GetAllMembersForCar(carId);
        var allKeys = await _keyRepository.GetKeysByCar(carId);

        var members = allMembers
            .Select(member => new MemberDto
            {
                Member = UserAdapter.ToDto(member),
                Keys = allKeys
                    .Where(k => k.Member.Id == member.Id)
                    .Select(KeyAdapter.ToKeyDto)
                    .ToList()
            }).ToList();

        return new CarDetailDto
        {
            Car = CarAdapter.ToCarDto(car),
            Members = members
        };
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

    public Task<CarDto> UpdateCar(long carId, long userId, CarDto dto)
    {
        throw new NotImplementedException();
    }
}