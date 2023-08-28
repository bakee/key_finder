using core.Exceptions;
using Microsoft.AspNetCore.Mvc;

namespace KeyFinder.Api.Controller;

public abstract class BaseController : ControllerBase
{
    protected long GetUserId()
    {
        var userIdString = HttpContext.User.Claims.FirstOrDefault(c => c.Type == "UserId")?.Value;
        if (string.IsNullOrEmpty(userIdString))
        {
            throw new UserNotFoundException("UnAuthenticated user");
        }

        try
        {
            return long.Parse(userIdString);
        }
        catch (Exception e)
        {
            throw new UserNotFoundException("UnAuthenticated user");
        }
    }
}