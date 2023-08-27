using Microsoft.EntityFrameworkCore;

namespace KeyFinder.Repository;

using System.Threading.Tasks;
using Core.Entity;
using KeyFinder.Core.Repository;

public class UserRepository : RepositoryBase<User>, IUserRepository
{
    public UserRepository(AppDbContext context) : base(context)
    {
    }

    public async Task<User?> GetByEmail(string email)
    {
        return await All()
            .Where(u => u.Email == email)
            .FirstOrDefaultAsync();
    }
}