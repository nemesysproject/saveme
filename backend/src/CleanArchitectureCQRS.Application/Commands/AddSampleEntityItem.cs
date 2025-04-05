using SaveMe.Shared.Abstractions.Commands;

namespace SaveMe.Application.Commands.Handlers;

public record AddSampleEntityItem(Guid sampleEntityId, string Name, uint Quantity) : ICommand;
