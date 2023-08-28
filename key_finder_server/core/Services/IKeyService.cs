namespace KeyFinder.Core.Service;
public interface IKeyService
{
    Task ClaimKey(long keyId, long userId);
    Task TransferKey(long keyId, long userId, long newKeyHolderId);
}