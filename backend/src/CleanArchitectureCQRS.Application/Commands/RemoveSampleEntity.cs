using SaveMe.Shared.Abstractions.Commands;

namespace SaveMe.Application.Commands;

public record RemoveSampleEntity(Guid Id) : ICommand;
