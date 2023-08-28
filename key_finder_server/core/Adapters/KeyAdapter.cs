using KeyFinder.Core.Dto;
using KeyFinder.Core.Entity;

namespace KeyFinder.Core.Adapters;

public static class KeyAdapter
{
    public static KeyDto ToKeyDto(Key key)
    {
        return new KeyDto
        {
            Name = key.Name,
            KeyId = key.Id,
            MemberId = key.Member.Id
        };
    }
}