namespace KeyFinder.Core.Service;

public interface IJwtService
{
    string GenerateJwtToken(string userId, string username, string email);
}