using Microsoft.EntityFrameworkCore;

public class User : EntityBase {
    public String Name {get; set;}
    public String Email {get; set;}
    public String Password {get; set;}
}