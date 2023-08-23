
using KeyFinder.Core.Repository;
using KeyFinder.Core.Service;
using KeyFinder.Repository;
using KeyFinder.Service;

namespace KeyFinder.Api;

public static class DependencyInjection
{
    public static void ConfigureDependency(IServiceCollection services)
    {
        services.AddScoped<IUserService, UserService>();
        services.AddScoped<IUserRepository, UserRepository>();
    }
}