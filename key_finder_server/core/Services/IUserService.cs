using KeyFinder.Core.Dto;

namespace KeyFinder.Core.Service;

public interface IUserService
{
    Task<UserDto> CreateUserAsync(UserDto user);
    Task<UserDto> Login(UserDto dto);
}