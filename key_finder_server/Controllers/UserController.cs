using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("/api/[controller]")]
public class UserController : ControllerBase
{
    [HttpPost]
    public ActionResult CreateUser(UserDto user)
    {
        return Ok(user);
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