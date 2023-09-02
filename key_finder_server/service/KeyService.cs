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
        var key = await GetKey(keyId);

        if (key.Member.Id == userId)
        {
            return;
        }

        await TransferKey(key, userId, KeyHandoverType.Claim);
    }

    public async Task TransferKey(long keyId, long userId, long newKeyHolderId)
    {
        var key = await GetKey(keyId);
        
        if (key.Member.Id != userId)
        {
            throw new InsufficientPermissionException("You do not have the key to transfer");
        }

        if (key.Member.Id == newKeyHolderId)
        {
            return;
        }

        await TransferKey(key, newKeyHolderId, KeyHandoverType.Transfer);
    }
    
    private async Task<Key> GetKey(long keyId)
    {
        var key = await _keyRepository.GetById(keyId);
        if (key == null)
        {
            throw new NotFoundException("Key not found");
        }

        return key;
    }

    private async Task TransferKey(Key key, long newKeyHolderId, KeyHandoverType handoverType)
    {
        var members = await _shareHolderRepository.GetAllMembersForCar(key.Car.Id);
        var member = members.FirstOrDefault(m => m.Id == newKeyHolderId);
        if (member == null)
        {
            throw new InsufficientPermissionException("Member is not a shareholder of the car");
        }

        var previousMember = key.Member;
        key.Member = member;
        await _keyRepository.Update(key);

        var keyLocation = new KeyLocation
        {
            Key = key,
            HandoverType = handoverType,
            PreviousMember = previousMember,
            Member = member
        };
        await _keyLocationRepository.Insert(keyLocation);
    }
}