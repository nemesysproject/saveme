using SaveMe.Application.Exceptions;
using SaveMe.Domain.Repositories;
using SaveMe.Shared.Abstractions.Commands;

namespace SaveMe.Application.Commands.Handlers;

internal sealed class RemoveSampleEntityHandler : ICommandHandler<RemoveSampleEntity>
{
    private readonly ISampleEntityRepository _repository;

    public RemoveSampleEntityHandler(ISampleEntityRepository repository)
        => _repository = repository;

    public async Task HandleAsync(RemoveSampleEntity command)
    {
        var sampleEntity = await _repository.GetAsync(command.Id);

        if (sampleEntity is null)
        {
            throw new SampleEntityNotFound(command.Id);
        }

        await _repository.DeleteAsync(sampleEntity);
    }
}