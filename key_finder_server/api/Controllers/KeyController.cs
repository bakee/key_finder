using KeyFinder.Core.Dto;
using KeyFinder.Core.Service;
using Microsoft.AspNetCore.Mvc;

namespace KeyFinder.Api.Controller;

[ApiController]
[Route("api/keys")]
//[Authorize]
public class KeyController : BaseController
{
    private readonly IKeyService _keyService;

    [HttpPost("claim")]
    public async Task<ActionResult> ClaimKey(KeyDto keyDto)
    {
        var userId = GetUserId();
        await _keyService.ClaimKey(keyDto.KeyId, userId);
        return Ok();
    }
    
    [HttpPost("transfer")]
    public async Task<ActionResult> TransferKey(KeyDto keyDto)
    {
        var userId = GetUserId();
        await _keyService.TransferKey(keyDto.KeyId, userId, keyDto.MemberId);
        return Ok();
    }
}