using System.Net;

namespace core.Exceptions;

public class InsufficientPermissionException : HttpException
{
    public InsufficientPermissionException(string message) : base(message, HttpStatusCode.Forbidden)
    {
    }
}