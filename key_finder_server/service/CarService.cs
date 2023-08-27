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

    public CarService(ICarRepository carRepository, IUserRepository userRepository)
    {
        _carRepository = carRepository;
        _userRepository = userRepository;
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
        return CarAdapter.ToCarDto(savedCar);
    }

    public Task<Car> ChangeLicensePlate(long carId, string newPlate)
    {
        throw new NotImplementedException();
    }

    public Task<Car> ChangeOwner(long carId, long userId, long newOwnerId)
    {
        throw new NotImplementedException();
    }

    public Task<bool> AddShareHolder(long carId, long userId, long newMemberId)
    {
        throw new NotImplementedException();
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