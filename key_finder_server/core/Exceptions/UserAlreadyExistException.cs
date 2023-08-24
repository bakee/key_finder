using System.Net;

namespace core.Exceptions;

public class UserAlreadyExistException : HttpException
{
    public UserAlreadyExistException(string message) : base(message, HttpStatusCode.Conflict)
    {
    }
}