using core.Exceptions;
using KeyFinder.Core.Service;
using KeyFinder.Core.Repository;
using KeyFinder.Core.Dto;
using KeyFinder.Core.Adapters;

namespace KeyFinder.Service;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    private readonly IJwtService _jwtService;

    public UserService(IUserRepository userRepository, IJwtService jwtService)
    {
        _userRepository = userRepository;
        _jwtService = jwtService;
    }

    public async Task<UserDto> CreateUserAsync(UserDto dto)
    {
        try
        {
            var userEntity = UserAdapter.ToEntity(dto);
            userEntity.Password = HashPassword(userEntity.Password);
            var user = await _userRepository.Insert(userEntity);
            return UserAdapter.ToDto(user);
        }
        catch (Exception e)
        {
            throw new AlreadyExistException("User with same email address already exists!");
        }
    }

    public async Task<UserDto> Login(UserDto dto)
    {
        var user = await _userRepository.GetByEmail(dto.Email);
        if (user == null)
        {
            throw new UserNotFoundException("User not found with this email");
        }

        if (!CheckPassword(dto.Password, user.Password))
        {
            Thread.Sleep(TimeSpan.FromSeconds(1));
            throw new UserNotFoundException("Incorrect credentials provided!");
        }
        
        var responseDto = UserAdapter.ToDto(user);
        responseDto.Token = _jwtService.GenerateJwtToken(user.Id.ToString(), user.Name, user.Email);
        return responseDto;
    }

    public async Task<List<UserDto>> FindUsers(string? name, string? email)
    {
        if (!string.IsNullOrWhiteSpace(name))
        {
            var username = name.Trim();
            var users = await _userRepository.FindByName(username);
            return users.Select(UserAdapter.ToDto).ToList();
        }
        else if(!string.IsNullOrWhiteSpace(email))
        {
            var emailAddress = email.Trim();
            var users = await _userRepository.FindByEmail(emailAddress);
            return users.Select(UserAdapter.ToDto).ToList();
        }

        var allUsers = await _userRepository.GetAll();
        return allUsers.Select(UserAdapter.ToDto).ToList();
    }

    private string HashPassword(string password)
    {
        var salt = BCrypt.Net.BCrypt.GenerateSalt();
        return BCrypt.Net.BCrypt.HashPassword(password, salt);
    }

    private bool CheckPassword(string password, string hashedPassword)
    {
        return BCrypt.Net.BCrypt.Verify(password, hashedPassword);
    }
}