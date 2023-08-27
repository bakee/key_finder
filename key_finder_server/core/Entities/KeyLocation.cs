namespace KeyFinder.Core.Entity;

public class KeyLocation : EntityBase
{
    public Key Key { get; set; }
    public User Member { get; set; }
    public User? PreviousMember { get; set; }
    public KeyHandoverType HandoverType { get; set; }
}