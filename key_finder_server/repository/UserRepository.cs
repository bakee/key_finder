using Microsoft.EntityFrameworkCore;

namespace KeyFinder.Repository;

using System.Threading.Tasks;
using KeyFinder.Core.Entity;
using KeyFinder.Core.Repository;

public class UserRepository : RepositoryBase<User>, IUserRepository
{
    private readonly AppDbContext _context;
    public UserRepository(AppDbContext context) : base(context)
    {
        _context = context;
    }

    public async Task<User?> GetByEmail(string email)
    {
        return await All()
            .Where(u => u.Email == email)
            .FirstOrDefaultAsync();
    }
}
