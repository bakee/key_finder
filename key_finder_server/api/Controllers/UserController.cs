using Microsoft.AspNetCore.Mvc;

using KeyFinder.Core.Dto;
using KeyFinder.Core.Service;

namespace KeyFinder.Api.Controller;

[ApiController]
[Route("/api/[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;
    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    public async Task<ActionResult> CreateUser(UserDto user)
    {
        var newUser = await _userService.CreateUserAsync(user);
        return Ok(newUser);
    }

    [HttpPost("login")]
    public ActionResult Login(UserDto user)
    {
        if (user.Email == "")
        {
            return Unauthorized("Invalid credential provided.");
        }
        return Ok(new
        {
            user = user,
            token = "jjj.www.ttt"
        });
    }
}