using System;
using System.Collections.Generic;

namespace SaveMe.Infrastructure;

/// <summary>
/// In Strerts
/// In pets.SHELTER
/// Recued
/// Adoption
/// RIP
/// </summary>
public partial class PetStatus
{
    public int Idstatus { get; set; }

    public string? Description { get; set; }

    public bool? Active { get; set; }

    public virtual ICollection<Pet> Pets { get; set; } = new List<Pet>();
}
