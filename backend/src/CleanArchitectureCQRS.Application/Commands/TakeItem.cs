using SaveMe.Shared.Abstractions.Commands;

namespace SaveMe.Application.Commands;

public record TakeItem(Guid sampleEntityId, string Name) : ICommand;