using System.Net;

namespace core.Exceptions;

public class AlreadyExistException : HttpException
{
    public AlreadyExistException(string message) : base(message, HttpStatusCode.Conflict)
    {
    }
}