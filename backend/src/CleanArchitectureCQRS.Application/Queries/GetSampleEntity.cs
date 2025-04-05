using SaveMe.Application.DTOs;
using SaveMe.Shared.Abstractions.Queries;

namespace SaveMe.Application.Queries;

public class GetSampleEntity : IQuery<SampleEntityDto>
{
    public Guid Id { get; set; }
}
