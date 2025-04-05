using SaveMe.Domain.Entities;
using SaveMe.Shared.Abstractions.Domains;
using SaveMe.Domain.ValueObjects;

namespace SaveMe.Domain.Events;

public record SampleEntityItemRemoved(SampleEntity sampleEntity, SampleEntityItem sampleEntityItem) : IDomainEvent;