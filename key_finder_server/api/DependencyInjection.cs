
using KeyFinder.Core.Entity;
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
        services.AddScoped<IJwtService, JwtService>();
        services.AddScoped<ICarService, CarService>();
        services.AddScoped<ICarRepository, CarRepository>();
    }
}