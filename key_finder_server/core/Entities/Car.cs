namespace KeyFinder.Core.Entity;

public class Car : EntityBase
{
    public string Make { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
    public string LicensePlate { get; set; }
    public User Owner { get; set; }
}