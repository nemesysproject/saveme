using System;
using System.Collections.Generic;

namespace SaveMe.Infrastructure;

public partial class PetMedium
{
    public int Idpetmedia { get; set; }

    public string? Petid { get; set; }

    public int? Idmedia { get; set; }

    public DateOnly? Recorddate { get; set; }

    public string? Picture { get; set; }

    public virtual ICollection<HistoryPlace> HistoryPlaces { get; set; } = new List<HistoryPlace>();

    public virtual Mediatype? IdmediaNavigation { get; set; }

    public virtual Pet? Pet { get; set; }
}
