using SaveMe.Application.Exceptions;
using SaveMe.Domain.Repositories;
using SaveMe.Shared.Abstractions.Commands;

namespace SaveMe.Application.Commands.Handlers;

internal sealed class TakeItemHandler : ICommandHandler<TakeItem>
{
    private readonly ISampleEntityRepository _repository;

    public TakeItemHandler(ISampleEntityRepository repository)
        => _repository = repository;

    public async Task HandleAsync(TakeItem command)
    {
        var sampleEntity = await _repository.GetAsync(command.sampleEntityId);

        if (sampleEntity is null)
        {
            throw new SampleEntityNotFound(command.sampleEntityId);
        }

        sampleEntity.TakeItem(command.Name);

        await _repository.UpdateAsync(sampleEntity);
    }
}

