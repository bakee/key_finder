using Microsoft.AspNetCore.Mvc;

using KeyFinder.Core.Dto;
using KeyFinder.Core.Service;

namespace KeyFinder.Api.Controller;

[ApiController]
[Route("api")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;
    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet("users")]
    public async Task<ActionResult> SearchUsers(
        [FromQuery] string? name,
        [FromQuery] string? email)
    {
        var users = await _userService.FindUsers(name, email);
        return Ok(users);
        
    }

    [HttpPost("register")]
    public async Task<ActionResult> CreateUser(UserDto user)
    {
        var newUser = await _userService.CreateUserAsync(user);
        return Ok(newUser);
    }

    [HttpPost("login")]
    public async Task<ActionResult> Login(UserDto dto)
    {
        var user = await _userService.Login(dto);
        return Ok(user);
    }
}