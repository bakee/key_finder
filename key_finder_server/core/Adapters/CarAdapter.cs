using KeyFinder.Core.Dto;
using KeyFinder.Core.Entity;

namespace KeyFinder.Core.Adapters;

public static class CarAdapter
{
    public static Car ToCar(CarDto carDto)
    {
        return new Car
        {
            Id = carDto.Id,
            Make = carDto.Make,
            Model = carDto.Model,
            Year = carDto.Year,
            LicensePlate = carDto.LicensePlate
        };
    }
    
    public static CarDto ToCarDto(Car car)
    {
        return new CarDto
        {
            Id = car.Id,
            Make = car.Make,
            Model = car.Model,
            Year = car.Year,
            LicensePlate = car.LicensePlate
        };
    }
}