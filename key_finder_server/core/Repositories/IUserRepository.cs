using KeyFinder.Core.Entity;

namespace KeyFinder.Core.Repository;
public interface IUserRepository : IRepositoryBase<User>
{
    Task<User?> GetByEmail(string email);
    Task<List<User>> FindByName(string username);
    Task<List<User>> FindByEmail(string email);
}