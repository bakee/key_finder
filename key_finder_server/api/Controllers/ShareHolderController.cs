using KeyFinder.Core.Dto;
using KeyFinder.Core.Service;
using Microsoft.AspNetCore.Mvc;

namespace KeyFinder.Api.Controller;

[ApiController]
[Route("api/shareholders")]
//[Authorize]
public class ShareHolderController : BaseController
{
    private readonly IShareHolderService _shareHolderService;

    public ShareHolderController(IShareHolderService shareHolderService)
    {
        _shareHolderService = shareHolderService;
    }
    
    [HttpGet("{carId:long}")]
    public async Task<ActionResult> GetShareHolders( long carId)
    {
        return Ok();
    }

    [HttpPost]
    public async Task<ActionResult> AddShareHolder(ShareHolderDto shareHolderDto)
    {
        var userId = GetUserId();
        await _shareHolderService.AddShareHolder(shareHolderDto.CarId, userId, shareHolderDto.MemberId);
        return Ok();
    }
    
    [HttpDelete]
    public async Task<ActionResult> RemoveShareHolder(ShareHolderDto shareHolderDto)
    {
        var userId = GetUserId();
        await _shareHolderService.RemoveShareHolder(shareHolderDto.CarId, userId, shareHolderDto.MemberId);
        return Ok();
    }
}