using SaveMe.Domain.ValueObjects;

namespace SaveMe.Domain.Policies;

    public record PolicyData(Consts.Gender Gender, SampleEntityDestination Destination);
