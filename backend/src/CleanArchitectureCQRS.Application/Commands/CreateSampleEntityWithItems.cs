using SaveMe.Domain.Consts;
using SaveMe.Shared.Abstractions.Commands;

namespace SaveMe.Application.Commands;

public record CreateSampleEntityWithItems(Guid Id, string Name, Gender Gender,
   DestinationWriteModel Destionation) : ICommand;

public record DestinationWriteModel(string City, string Country);
