namespace KeyFinder.Core.Entity;

public class Key : EntityBase
{
    public string Name { get; set; }
    public Car Car { get; set; }
}