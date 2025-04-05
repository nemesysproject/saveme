using SaveMe.Shared.Abstractions.Exceptions;

namespace SaveMe.Domain.Exceptions;

    public class SampleInvalidException : PublicException
    {

        public SampleInvalidException() : base("Sample ID cannot be empty.")
        {
        }
    }
