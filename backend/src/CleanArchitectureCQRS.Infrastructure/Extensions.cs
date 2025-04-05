using SaveMe.Infrastructure.EF;
using SaveMe.Infrastructure.Logging;
using SaveMe.Infrastructure.Services;
using SaveMe.Shared.Abstractions.Commands;
using SaveMe.Shared.Queries;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace SaveMe.Infrastructure;

public static class Extensions
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddSQLDB(configuration);
        services.AddQueries();
        services.AddSerilog(configuration);
        //services.AddSingleton<IExternalService, ExternalService>();
        services.TryDecorate(typeof(ICommandHandler<>), typeof(LoggingCommandHandlerDecorator<>));

        return services;
    }
}
