using SaveMe.Application.Services;
using SaveMe.Domain.Repositories;
using SaveMe.Infrastructure.EF.Contexts;
using SaveMe.Infrastructure.EF.Options;
using SaveMe.Infrastructure.EF.Repositories;
using SaveMe.Infrastructure.EF.Services;
using SaveMe.Shared.Options;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace SaveMe.Infrastructure.EF;

internal static class Extensions
{
    public static IServiceCollection AddSQLDB(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped<ISampleEntityRepository, SampleEntityRepository>();
        services.AddScoped<ISampleEntityReadService, SampleEntityReadService>();

        var options = configuration.GetOptions<DataBaseOptions>("DataBaseConnectionString");
        
        if (options.DataBaseType == "SQLServer") // Define el tipo de base de datos en configuración
        {
            // SQL Server
            services.AddDbContext<ReadDbContext>(ctx =>
            ctx.UseSqlServer(options.ConnectionString));

            services.AddDbContext<WriteDbContext>(ctx =>
                ctx.UseSqlServer(options.ConnectionString));
            // SQL Server
        }
        else
        {
            // PostgreSQL

            services.AddDbContext<ReadDbContext>(ctx =>
            ctx.UseNpgsql(options.PostgreSqlConnection));

            services.AddDbContext<WriteDbContext>(ctx =>
                ctx.UseNpgsql(options.PostgreSqlConnection));
            // PostgreSQL
        }

        return services;
    }
}
