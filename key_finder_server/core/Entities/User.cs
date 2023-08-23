using Microsoft.EntityFrameworkCore;

namespace KeyFinder.Core.Entity;

public class User : EntityBase
{

    public String Name { get; set; }
    public String Email { get; set; }
    public String Password { get; set; }
}