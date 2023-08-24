using System.Net;

namespace core.Exceptions;

public class UserNotFoundException : HttpException
{
    public UserNotFoundException(string message) : base(message, HttpStatusCode.Unauthorized)
    {
    }
}