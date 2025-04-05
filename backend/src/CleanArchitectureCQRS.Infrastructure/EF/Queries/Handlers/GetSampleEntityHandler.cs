using SaveMe.Application.DTOs;
using SaveMe.Application.Queries;
using SaveMe.Domain.Entities;
using SaveMe.Infrastructure.EF.Contexts;
using SaveMe.Infrastructure.EF.Models;
using SaveMe.Shared.Abstractions.Queries;
using Microsoft.EntityFrameworkCore;

namespace SaveMe.Infrastructure.EF.Queries.Handlers;

internal sealed class GetSampleEntityHandler : IQueryHandler<GetSampleEntity, SampleEntityDto>
{
    private readonly DbSet<SampleEntityReadModel> _SampleEntities;

    public GetSampleEntityHandler(ReadDbContext context)
        => _SampleEntities = context.SampleEntities;

    public Task<SampleEntityDto> HandleAsync(GetSampleEntity query)
        => _SampleEntities
            .Include(pl => pl.Items)
            .Where(pl => pl.Id == query.Id)
            .Select(pl => pl.AsDto())
            .AsNoTracking()
            .SingleOrDefaultAsync();
}
