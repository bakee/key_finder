namespace KeyFinder.Repository;

using KeyFinder.Core.Entity;
using KeyFinder.Core.Repository;

public class UserRepository : RepositoryBase<User>, IUserRepository
{
    public UserRepository(AppDbContext context) : base(context)
    {
    }
}
