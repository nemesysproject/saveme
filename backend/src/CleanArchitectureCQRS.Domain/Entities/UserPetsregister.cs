using System;
using System.Collections.Generic;

namespace SaveMe.Infrastructure;

public partial class UserPetsregister
{
    public string Iduser { get; set; } = null!;

    public string Petid { get; set; } = null!;

    public DateOnly? Recorddate { get; set; }

    public virtual ICollection<HistoryPlace> HistoryPlaces { get; set; } = new List<HistoryPlace>();

    public virtual AppUser IduserNavigation { get; set; } = null!;

    public virtual Pet Pet { get; set; } = null!;
}
