
using SaveMe.Domain.Entities;
using SaveMe.Shared.Abstractions.Domains;
using SaveMe.Domain.ValueObjects;

namespace SaveMe.Domain.Events;

public record SampleEntityItemAdded(SampleEntity sampleEntity, SampleEntityItem sampleEntityItem) : IDomainEvent;
