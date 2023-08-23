using KeyFinder.Core.Dto;
using KeyFinder.Core.Entity;

namespace KeyFinder.Core.Adapters;

public static class UserAdapter
{
    public static User ToEntity(UserDto dto)
    {
        return new User
        {
            Name = dto.Name,
            Email = dto.Email,
            Password = dto.Password
        };
    }

    public static UserDto ToDto(User user)
    {
        return new UserDto
        {
            Name = user.Name,
            Email = user.Email
        };
    }
}

