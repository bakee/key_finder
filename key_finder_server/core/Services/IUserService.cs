using KeyFinder.Core.Dto;

namespace KeyFinder.Core.Service;

public interface IUserService
{
    public Task<UserDto> CreateUserAsync(UserDto user);
}