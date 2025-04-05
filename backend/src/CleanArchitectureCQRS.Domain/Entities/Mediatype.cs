using System;
using System.Collections.Generic;

namespace SaveMe.Infrastructure;

/// <summary>
/// JPG
/// PNG
/// MP4
/// MVM
/// AVI
/// </summary>
public partial class Mediatype
{
    public int Idmedia { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<PetMedium> PetMedia { get; set; } = new List<PetMedium>();
}
