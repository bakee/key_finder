namespace KeyFinder.Core.Dto;

public class KeyLocationDto
{
    public KeyDto Key { get; set; }
    public UserDto Member { get; set; }
    public UserDto? PreviousMember { get; set; }
    public string HandoverType { get; set; }
    public DateTime Created { get; set; }
}