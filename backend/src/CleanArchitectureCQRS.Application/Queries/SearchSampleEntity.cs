using SaveMe.Application.DTOs;
using SaveMe.Shared.Abstractions.Queries;

namespace SaveMe.Application.Queries;

public class SearchSampleEntity : IQuery<IEnumerable<SampleEntityDto>>
{
    public string SearchPhrase { get; set; }
}
