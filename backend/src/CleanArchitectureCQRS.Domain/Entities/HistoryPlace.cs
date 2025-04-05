using System;
using System.Collections.Generic;

namespace SaveMe.Infrastructure;

public partial class HistoryPlace
{
    public int Idplace { get; set; }

    public int? Idpetmedia { get; set; }

    public string? Iduser { get; set; }

    public string? Petid { get; set; }

    public string? Geolocation { get; set; }

    public DateOnly? Recorddate { get; set; }

    public virtual PetMedium? IdpetmediaNavigation { get; set; }

    public virtual UserPetsregister? UserPetsregister { get; set; }
}
