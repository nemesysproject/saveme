using SaveMe.Domain.Entities;
using SaveMe.Shared.Abstractions.Domains;
using SaveMe.Domain.ValueObjects;

namespace SaveMe.Domain.Events;

public record SampleEntityItemTaken(SampleEntity sampleEntity, SampleEntityItem sampleEntityItem) : IDomainEvent;
