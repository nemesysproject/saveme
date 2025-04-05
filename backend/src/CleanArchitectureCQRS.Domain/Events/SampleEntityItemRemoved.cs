using CleanArchitectureCQRS.Domain.Entities;
using CleanArchitectureCQRS.Shared.Abstractions.Domains;
using CleanArchitectureCQRS.Domain.ValueObjects;

namespace CleanArchitectureCQRS.Domain.Events;

public record SampleEntityItemRemoved(SampleEntity sampleEntity, SampleEntityItem sampleEntityItem) : IDomainEvent;