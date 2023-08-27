using Microsoft.EntityFrameworkCore;

using KeyFinder.Core.Entity;

namespace KeyFinder.Repository;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Car> Cars { get; set; }
    public DbSet<Key> Keys { get; set; }
    public DbSet<KeyLocation> KeyLocations { get; set; }
    public DbSet<ShareHolder> ShareHolders { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>()
            .HasIndex(u => u.Email)
            .IsUnique();

        modelBuilder.Entity<Car>()
            .HasIndex(c => c.LicensePlate)
            .IsUnique();
    }
}