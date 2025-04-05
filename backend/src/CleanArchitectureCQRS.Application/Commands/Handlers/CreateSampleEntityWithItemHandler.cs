using SaveMe.Application.Exceptions;
using SaveMe.Application.Services;
using SaveMe.Domain.Factories;
using SaveMe.Domain.Repositories;
using SaveMe.Domain.ValueObjects;
using SaveMe.Shared.Abstractions.Commands;

namespace SaveMe.Application.Commands.Handlers;

public class CreateSampleEntityWithItemHandler : ICommandHandler<CreateSampleEntityWithItems>
{
    private readonly ISampleEntityRepository _repository;
    private readonly ISampleEntityFactory _factory;
    private readonly ISampleEntityReadService _readService;



    public CreateSampleEntityWithItemHandler(ISampleEntityRepository repository, ISampleEntityFactory factory,
        ISampleEntityReadService readService)
    {
        _repository = repository;
        _factory = factory;
        _readService = readService;
    }

    public async Task HandleAsync(CreateSampleEntityWithItems command)
    {
        var (id, name, gender, DestinationWriteModel) = command;


        if (await _readService.ExistsByNameAsync(name))
        {
            throw new SampleEntityAlreadyExistsException(name);
        }


        var destination = new SampleEntityDestination(DestinationWriteModel.City, DestinationWriteModel.Country);

        var sampleEntity = _factory.CreateWithDefaultItems(id, name, gender,
            destination);

        await _repository.AddAsync(sampleEntity);
    }

}

