namespace KeyFinder.Service;

using KeyFinder.Core.Service;

public class KeyService : IKeyService
{
    public Task<bool> ClaimKey(long keyId, long userId)
    {
        throw new NotImplementedException();
    }

    public Task<bool> TransferKey(long keyId, long userId, long newKeyHolderId)
    {
        throw new NotImplementedException();
    }
}