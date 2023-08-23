using KeyFinder.Core.Service;
using KeyFinder.Core.Repository;
using KeyFinder.Core.Dto;
using KeyFinder.Core.Entity;
using KeyFinder.Core.Adapters;

namespace KeyFinder.Service;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<UserDto> CreateUserAsync(UserDto dto)
    {
        var userEntity = UserAdapter.ToEntity(dto);
        var user = await _userRepository.Insert(userEntity);
        return UserAdapter.ToDto(user);
    }
}