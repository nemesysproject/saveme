using System;
using System.Collections.Generic;

namespace SaveMe.Infrastructure;

public partial class AppUser
{
    public string Iduser { get; set; } = null!;

    public string? Firstname { get; set; }

    public string? Middlename { get; set; }

    public string? Lastname { get; set; }

    public string? Email { get; set; }

    public string? Telephone { get; set; }

    public DateOnly? Recorddate { get; set; }

    public bool? Active { get; set; }

    public virtual ICollection<UserPetsregister> UserPetsregisters { get; set; } = new List<UserPetsregister>();
}
