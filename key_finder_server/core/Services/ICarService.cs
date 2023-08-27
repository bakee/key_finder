using KeyFinder.Core.Dto;
using KeyFinder.Core.Entity;

namespace KeyFinder.Core.Service;

public interface ICarService
{
    Task<CarDto> CreateCar(CarDto carDto, long userId);
    Task<Car> ChangeLicensePlate(long carId, string newPlate);
    Task<Car> ChangeOwner(long carId, long userId, long newOwnerId);
    Task<bool> AddShareHolder(long carId, long userId, long newMemberId);
    Task<bool> RemoveShareHolder(long carId, long userId, long oldMemberId);
    Task<bool> ClaimKey(long keyId, long userId);
    Task<bool> TransferKey(long keyId, long userId, long newKeyHolderId);
    Task<CarDto> GetCarSummary(long carId, long userId);
}