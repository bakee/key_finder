namespace KeyFinder.Core.Service;
public interface IKeyService
{
    Task ClaimKey(long keyId, long userId);
    Task<bool> TransferKey(long keyId, long userId, long newKeyHolderId);
}