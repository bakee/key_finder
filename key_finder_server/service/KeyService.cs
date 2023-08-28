using core.Exceptions;
using KeyFinder.Core.Entity;
using KeyFinder.Core.Repository;

namespace KeyFinder.Service;

using KeyFinder.Core.Service;

public class KeyService : IKeyService
{
    private readonly IKeyRepository _keyRepository;
    private readonly IShareHolderRepository _shareHolderRepository;
    private readonly IKeyLocationRepository _keyLocationRepository;

    public KeyService(
        IKeyRepository keyRepository, 
        IShareHolderRepository shareHolderRepository, 
        IKeyLocationRepository keyLocationRepository)
    {
        _keyRepository = keyRepository;
        _shareHolderRepository = shareHolderRepository;
        _keyLocationRepository = keyLocationRepository;
    }

    public async Task ClaimKey(long keyId, long userId)
    {
        var key = await _keyRepository.GetById(keyId);
        if (key == null)
        {
            throw new NotFoundException("Key not found");
        }

        if (key.Member.Id == userId)
        {
            return;
        }

        var members = await _shareHolderRepository.GetAllMembersForCar(key.Car.Id);
        var member = members.FirstOrDefault(m => m.Id == userId);
        if (member == null)
        {
            throw new InsufficientPermissionException("Use is not a shareholder of the car");
        }

        var previousMember = key.Member;
        key.Member = member;
        await _keyRepository.Update(key);

        var keyLocation = new KeyLocation
        {
            HandoverType = KeyHandoverType.Claim,
            PreviousMember = previousMember,
            Member = member
        };
        await _keyLocationRepository.Insert(keyLocation);
    }

    public Task<bool> TransferKey(long keyId, long userId, long newKeyHolderId)
    {
        throw new NotImplementedException();
    }
}