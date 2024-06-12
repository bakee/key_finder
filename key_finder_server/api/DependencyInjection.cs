
using KeyFinder.Core.Repository;
using KeyFinder.Core.Service;
using KeyFinder.Repository;
using KeyFinder.Service;

namespace KeyFinder.Api;

public static class DependencyInjection
{
    public static void ConfigureDependency(IServiceCollection services)
    {
        ConfigureServiceDependencies(services);
        ConfigureRepositoryDependencies(services);
    }

    private static void ConfigureServiceDependencies(IServiceCollection services)
    {
        services.AddScoped<ICarService, CarService>();
        services.AddScoped<IJwtService, JwtService>();
        services.AddScoped<IKeyService, KeyService>();
        services.AddScoped<IShareHolderService, ShareHolderService>();
        services.AddScoped<IUserService, UserService>();
    }

    private static void ConfigureRepositoryDependencies(IServiceCollection services)
    {
        services.AddScoped<ICarRepository, CarRepository>();
        services.AddScoped<IKeyLocationRepository, KeyLocationRepository>();
        services.AddScoped<IKeyRepository, KeyRepository>();
        services.AddScoped<IShareHolderRepository, ShareHolderRepository>();
        services.AddScoped<IUserRepository, UserRepository>();
    }
}