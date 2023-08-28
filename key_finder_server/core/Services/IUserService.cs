using KeyFinder.Core.Dto;

namespace KeyFinder.Core.Service;

public interface IUserService
{
    Task<UserDto> CreateUserAsync(UserDto user);
    Task<UserDto> Login(UserDto dto);
    Task<List<UserDto>> FindUsers(string? name, string? email);
}