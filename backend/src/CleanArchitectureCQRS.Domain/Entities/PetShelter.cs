using System;
using System.Collections.Generic;

namespace SaveMe.Infrastructure;

public partial class PetShelter
{
    public int Idshelter { get; set; }

    public string Petid { get; set; } = null!;

    public DateOnly? Ceckingdate { get; set; }

    public DateOnly? Checoutdate { get; set; }

    public virtual Shelter IdshelterNavigation { get; set; } = null!;

    public virtual Pet Pet { get; set; } = null!;
}
