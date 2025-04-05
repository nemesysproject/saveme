using System;
using System.Collections.Generic;

namespace SaveMe.Infrastructure;

public partial class Pet
{
    public string Petid { get; set; } = null!;

    public int? Idstatus { get; set; }

    public string? Alias { get; set; }

    public string? Observation { get; set; }

    public DateOnly? Recorddate { get; set; }

    public DateOnly? Updatedate { get; set; }

    public bool? Active { get; set; }

    public virtual PetStatus? IdstatusNavigation { get; set; }

    public virtual ICollection<PetMedium> PetMedia { get; set; } = new List<PetMedium>();

    public virtual ICollection<PetShelter> PetShelters { get; set; } = new List<PetShelter>();

    public virtual ICollection<UserPetsregister> UserPetsregisters { get; set; } = new List<UserPetsregister>();
}
