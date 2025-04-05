using SaveMe.Domain.ValueObjects;

namespace SaveMe.Domain.Policies;

    public interface ISampleEntityItemsPolicy
    {
        bool IsApplicable(PolicyData data);
        IEnumerable<SampleEntityItem> GenerateItems(PolicyData data);
    }
