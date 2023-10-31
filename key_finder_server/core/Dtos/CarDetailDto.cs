namespace KeyFinder.Core.Dto;

public class CarDetailDto
{
    public CarDto Car { get; set; }
    public List<MemberDto> Members { get; set; }
    public bool isOwner { get; set; }
}