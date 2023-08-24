using System.ComponentModel.DataAnnotations;

namespace KeyFinder.Core.Dto;

public class UserDto
{
    public long Id { get; set; }
    public String Name { get; set; }
    
    [Required]
    [EmailAddress]
    public String Email { get; set; }
    
    [Required]
    public String Password { get; set; }
    public String? Token { get; set; }
}