using SaveMe.Domain.Entities;
using SaveMe.Domain.ValueObjects;

namespace SaveMe.Domain.Repositories;

    public interface ISampleEntityRepository
    {
        Task<SampleEntity> GetAsync(SampleEntityId id);
        Task AddAsync(SampleEntity sampleEntity);
        Task UpdateAsync(SampleEntity sampleEntity);
        Task DeleteAsync(SampleEntity sampleEntity);
    }
