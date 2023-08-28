using Microsoft.AspNetCore.Mvc;

namespace KeyFinder.Api.Controller;

public abstract class BaseController : ControllerBase
{
    protected long GetUserId()
    {
        var userIdString = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "userId")?.Value;
        return !string.IsNullOrEmpty(userIdString) ? long.Parse(userIdString) : 1;
    }
}