using KeyFinder.Core.Dto;

namespace KeyFinder.Core.Service;

public interface ICarService
{
    Task<CarDto> CreateCar(CarDto carDto, long userId);
    Task<List<CarDto>> GetCarSummary(long userId);
    Task<CarDetailDto> GetCarDetail(long carId, long userId);
    Task<CarDto> UpdateCar(long carId, long userId, CarDto dto);
    Task<List<KeyLocationDto>> GetKeyTransferHistory(long carId, long userId);
}