using System.ComponentModel.DataAnnotations;

public abstract class EntityBase {
    [Key]
    public long Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public bool IsDeleted { get; set; }
}