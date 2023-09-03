using System.ComponentModel.DataAnnotations;

namespace KeyFinder.Core.Entity;

public abstract class EntityBase
{
    [Key]
    public long Id { get; set; }

    public DateTime Created { get; set; } = DateTime.UtcNow;
    public DateTime Updated { get; set; } = DateTime.UtcNow;
    // public bool IsDeleted { get; set; }
}