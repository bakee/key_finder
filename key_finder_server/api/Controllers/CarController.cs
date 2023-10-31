using KeyFinder.Core.Dto;
using KeyFinder.Core.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KeyFinder.Api.Controller;

[ApiController]
[Route("api/cars")]
[Authorize]
public class CarController : BaseController
{
    private readonly ICarService _carService;

    public CarController(ICarService carService)
    {
        _carService = carService;
    }

    [HttpGet]
    public async Task<ActionResult> GetSummary()
    {
        var userId = GetUserId();
        var carSummary = await _carService.GetCarSummary(userId);
        return Ok(carSummary);
    }

    [HttpGet("{carId:long}")]
    public async Task<ActionResult> GetDetail(long carId)
    {
        var userId = GetUserId();
        var carDetail = await _carService.GetCarDetail(carId, userId);
        return Ok(carDetail);
    }

    [HttpPost]
    public async Task<ActionResult> CreateCar(CarDto dto)
    {
        var userId = GetUserId();
        var car = await _carService.CreateCar(dto, userId);
        return Ok(car);
    }

    [HttpPut("{carId:long}")]
    public async Task<ActionResult> UpdateCar(long carId, [FromBody] CarDto dto)
    {
        var userId = GetUserId();
        var updatedCar = await _carService.UpdateCar(carId, userId, dto);
        return Ok(updatedCar);
    }

    [HttpGet("{carId:long}/history")]
    public async Task<ActionResult> GetKeyTransferHistory(long carId)
    {
        var userId = GetUserId();
        var carDetail = await _carService.GetKeyTransferHistory(carId, userId);
        return Ok(carDetail);
    }
}