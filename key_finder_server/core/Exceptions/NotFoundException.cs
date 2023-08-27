using System.Net;

namespace core.Exceptions;

public class NotFoundException : HttpException
{
    public NotFoundException(string message) : base(message, HttpStatusCode.NotFound)
    {
    }
}