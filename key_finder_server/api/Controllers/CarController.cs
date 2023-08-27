using KeyFinder.Core.Dto;
using KeyFinder.Core.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KeyFinder.Api.Controller;

[ApiController]
[Route("/api/[controller]")]
public class CarController : ControllerBase
{
    private readonly ICarService _carService;
    
    public CarController(ICarService carService)
    {
        _carService = carService;
    }

    private long GetUserId()
    {
        var userIdString = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "userId")?.Value;
        return !string.IsNullOrEmpty(userIdString) ? long.Parse(userIdString) : 1;
    }
    
    [HttpPost]
    //[Authorize]
    public async Task<ActionResult> CreateCar(CarDto dto)
    {
        var userId = GetUserId();
        var car = await _carService.CreateCar(dto, userId);
        return Ok(car);
    }
}