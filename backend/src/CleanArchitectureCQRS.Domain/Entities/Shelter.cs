using System;
using System.Collections.Generic;

namespace SaveMe.Infrastructure;

public partial class Shelter
{
    public int Idshelter { get; set; }

    public string? Sheltername { get; set; }

    public DateOnly? Recorddate { get; set; }

    public DateOnly? Address { get; set; }

    public string? Telephone { get; set; }

    public string? Geolocation { get; set; }

    public bool? Active { get; set; }

    public virtual ICollection<PetShelter> PetShelters { get; set; } = new List<PetShelter>();
}
