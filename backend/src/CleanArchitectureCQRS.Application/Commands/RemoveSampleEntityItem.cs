using SaveMe.Shared.Abstractions.Commands;

namespace SaveMe.Application.Commands;

public record RemoveSampleEntityItem(Guid sampleEntityId, string Name) : ICommand;
