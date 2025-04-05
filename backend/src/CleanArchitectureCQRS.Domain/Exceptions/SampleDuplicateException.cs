using SaveMe.Shared.Abstractions.Exceptions;

namespace SaveMe.Domain.Exceptions;

    public class SampleDuplicateException : PublicException
    {
        public string ListName { get; }
        public string ItemName { get; }

        public SampleDuplicateException(string listName, string itemName)
            : base($"Sample List: '{listName}' already defined item '{itemName}'")
        {
            ListName = listName;
            ItemName = itemName;
        }
    }
