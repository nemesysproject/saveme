using SaveMe.Domain.Consts;
using SaveMe.Domain.Entities;
using SaveMe.Domain.ValueObjects;

namespace SaveMe.Domain.Factories;

    public interface ISampleEntityFactory
    {
        SampleEntity Create(SampleEntityId id, SampleEntityName name, SampleEntityDestination destination);

        SampleEntity CreateWithDefaultItems(SampleEntityId id, SampleEntityName name, Gender gender,
            SampleEntityDestination destination);
    }
