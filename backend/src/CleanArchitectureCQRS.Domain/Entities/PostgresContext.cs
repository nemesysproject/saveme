using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace SaveMe.Infrastructure;

public partial class PostgresContext : DbContext
{
    public PostgresContext()
    {
    }

    public PostgresContext(DbContextOptions<PostgresContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AppUser> AppUsers { get; set; }

    public virtual DbSet<HistoryPlace> HistoryPlaces { get; set; }

    public virtual DbSet<Mediatype> Mediatypes { get; set; }

    public virtual DbSet<Pet> Pets { get; set; }

    public virtual DbSet<PetMedium> PetMedia { get; set; }

    public virtual DbSet<PetShelter> PetShelters { get; set; }

    public virtual DbSet<PetStatus> PetStatuses { get; set; }

    public virtual DbSet<Shelter> Shelters { get; set; }

    public virtual DbSet<UserPetsregister> UserPetsregisters { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=postgres;Username=postgres;Password=QazWsx12;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasPostgresExtension("pg_catalog", "adminpack");

        modelBuilder.Entity<AppUser>(entity =>
        {
            entity.HasKey(e => e.Iduser).HasName("pk_user");

            entity.ToTable("app_user", "users");

            entity.HasIndex(e => e.Iduser, "user_pk").IsUnique();

            entity.Property(e => e.Iduser)
                .HasMaxLength(50)
                .HasColumnName("iduser");
            entity.Property(e => e.Active).HasColumnName("active");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasColumnName("email");
            entity.Property(e => e.Firstname)
                .HasMaxLength(100)
                .HasColumnName("firstname");
            entity.Property(e => e.Lastname)
                .HasMaxLength(100)
                .HasColumnName("lastname");
            entity.Property(e => e.Middlename)
                .HasMaxLength(100)
                .HasColumnName("middlename");
            entity.Property(e => e.Recorddate).HasColumnName("recorddate");
            entity.Property(e => e.Telephone)
                .HasMaxLength(20)
                .HasColumnName("telephone");
        });

        modelBuilder.Entity<HistoryPlace>(entity =>
        {
            entity.HasKey(e => e.Idplace).HasName("pk_history_place");

            entity.ToTable("history_place", "pets");

            entity.HasIndex(e => e.Idplace, "history_place_pk").IsUnique();

            entity.HasIndex(e => new { e.Iduser, e.Petid }, "locaalizationhistory_fk");

            entity.HasIndex(e => e.Idpetmedia, "pictureplaces_fk");

            entity.Property(e => e.Idplace).HasColumnName("idplace");
            entity.Property(e => e.Geolocation)
                .HasMaxLength(255)
                .HasColumnName("geolocation");
            entity.Property(e => e.Idpetmedia).HasColumnName("idpetmedia");
            entity.Property(e => e.Iduser)
                .HasMaxLength(50)
                .HasColumnName("iduser");
            entity.Property(e => e.Petid)
                .HasMaxLength(50)
                .HasColumnName("petid");
            entity.Property(e => e.Recorddate).HasColumnName("recorddate");

            entity.HasOne(d => d.IdpetmediaNavigation).WithMany(p => p.HistoryPlaces)
                .HasForeignKey(d => d.Idpetmedia)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("fk_history__picturepl_pet_medi");

            entity.HasOne(d => d.UserPetsregister).WithMany(p => p.HistoryPlaces)
                .HasForeignKey(d => new { d.Iduser, d.Petid })
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("fk_history__locaaliza_user_pet");
        });

        modelBuilder.Entity<Mediatype>(entity =>
        {
            entity.HasKey(e => e.Idmedia).HasName("pk_mediatype");

            entity.ToTable("mediatype", "medias", tb => tb.HasComment("JPG\r\nPNG\r\nMP4\r\nMVM\r\nAVI"));

            entity.HasIndex(e => e.Idmedia, "mediatype_pk").IsUnique();

            entity.Property(e => e.Idmedia)
                .ValueGeneratedNever()
                .HasColumnName("idmedia");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
        });

        modelBuilder.Entity<Pet>(entity =>
        {
            entity.HasKey(e => e.Petid).HasName("pk_pet");

            entity.ToTable("pet", "pets");

            entity.HasIndex(e => e.Petid, "pet_pk").IsUnique();

            entity.HasIndex(e => e.Idstatus, "pet_states_fk");

            entity.Property(e => e.Petid)
                .HasMaxLength(50)
                .HasColumnName("petid");
            entity.Property(e => e.Active).HasColumnName("active");
            entity.Property(e => e.Alias)
                .HasMaxLength(255)
                .HasColumnName("alias");
            entity.Property(e => e.Idstatus).HasColumnName("idstatus");
            entity.Property(e => e.Observation).HasColumnName("observation");
            entity.Property(e => e.Recorddate).HasColumnName("recorddate");
            entity.Property(e => e.Updatedate).HasColumnName("updatedate");

            entity.HasOne(d => d.IdstatusNavigation).WithMany(p => p.Pets)
                .HasForeignKey(d => d.Idstatus)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("fk_pet_pet_state_pet_stat");
        });

        modelBuilder.Entity<PetMedium>(entity =>
        {
            entity.HasKey(e => e.Idpetmedia).HasName("pk_pet_media");

            entity.ToTable("pet_media", "medias");

            entity.HasIndex(e => e.Idmedia, "mediatypes_fk");

            entity.HasIndex(e => e.Idpetmedia, "pet_media_pk").IsUnique();

            entity.HasIndex(e => e.Petid, "petpictures_fk");

            entity.Property(e => e.Idpetmedia)
                .ValueGeneratedNever()
                .HasColumnName("idpetmedia");
            entity.Property(e => e.Idmedia).HasColumnName("idmedia");
            entity.Property(e => e.Petid)
                .HasMaxLength(50)
                .HasColumnName("petid");
            entity.Property(e => e.Picture)
                .HasMaxLength(254)
                .IsFixedLength()
                .HasColumnName("picture");
            entity.Property(e => e.Recorddate).HasColumnName("recorddate");

            entity.HasOne(d => d.IdmediaNavigation).WithMany(p => p.PetMedia)
                .HasForeignKey(d => d.Idmedia)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("fk_pet_medi_mediatype_mediatyp");

            entity.HasOne(d => d.Pet).WithMany(p => p.PetMedia)
                .HasForeignKey(d => d.Petid)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("fk_pet_medi_petpictur_pet");
        });

        modelBuilder.Entity<PetShelter>(entity =>
        {
            entity.HasKey(e => new { e.Idshelter, e.Petid }).HasName("pk_pet_shelters");

            entity.ToTable("pet_shelters", "pets");

            entity.HasIndex(e => new { e.Idshelter, e.Petid }, "pet_shelters_pk").IsUnique();

            entity.HasIndex(e => e.Petid, "petrelationshelters_fk");

            entity.Property(e => e.Idshelter).HasColumnName("idshelter");
            entity.Property(e => e.Petid)
                .HasMaxLength(50)
                .HasColumnName("petid");
            entity.Property(e => e.Ceckingdate).HasColumnName("ceckingdate");
            entity.Property(e => e.Checoutdate).HasColumnName("checoutdate");

            entity.HasOne(d => d.IdshelterNavigation).WithMany(p => p.PetShelters)
                .HasForeignKey(d => d.Idshelter)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("fk_pet_shel_shelterre_shelter");

            entity.HasOne(d => d.Pet).WithMany(p => p.PetShelters)
                .HasForeignKey(d => d.Petid)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("fk_pet_shel_petrelati_pet");
        });

        modelBuilder.Entity<PetStatus>(entity =>
        {
            entity.HasKey(e => e.Idstatus).HasName("pk_pet_status");

            entity.ToTable("pet_status", "pets", tb => tb.HasComment("In Strerts\r\nIn pets.SHELTER\r\nRecued\r\nAdoption\r\nRIP"));

            entity.HasIndex(e => e.Idstatus, "pet_status_pk").IsUnique();

            entity.Property(e => e.Idstatus)
                .ValueGeneratedNever()
                .HasColumnName("idstatus");
            entity.Property(e => e.Active).HasColumnName("active");
            entity.Property(e => e.Description)
                .HasMaxLength(100)
                .HasColumnName("description");
        });

        modelBuilder.Entity<Shelter>(entity =>
        {
            entity.HasKey(e => e.Idshelter).HasName("pk_shelter");

            entity.ToTable("shelter", "pets");

            entity.HasIndex(e => e.Idshelter, "shelter_pk").IsUnique();

            entity.Property(e => e.Idshelter).HasColumnName("idshelter");
            entity.Property(e => e.Active).HasColumnName("active");
            entity.Property(e => e.Address).HasColumnName("address");
            entity.Property(e => e.Geolocation)
                .HasMaxLength(255)
                .HasColumnName("geolocation");
            entity.Property(e => e.Recorddate).HasColumnName("recorddate");
            entity.Property(e => e.Sheltername)
                .HasMaxLength(255)
                .HasColumnName("sheltername");
            entity.Property(e => e.Telephone)
                .HasMaxLength(20)
                .HasColumnName("telephone");
        });

        modelBuilder.Entity<UserPetsregister>(entity =>
        {
            entity.HasKey(e => new { e.Iduser, e.Petid }).HasName("pk_user_petsregister");

            entity.ToTable("user_petsregister", "users");

            entity.HasIndex(e => e.Petid, "petrelationusers_fk");

            entity.HasIndex(e => new { e.Iduser, e.Petid }, "user_petsregister_pk").IsUnique();

            entity.Property(e => e.Iduser)
                .HasMaxLength(50)
                .HasColumnName("iduser");
            entity.Property(e => e.Petid)
                .HasMaxLength(50)
                .HasColumnName("petid");
            entity.Property(e => e.Recorddate).HasColumnName("recorddate");

            entity.HasOne(d => d.IduserNavigation).WithMany(p => p.UserPetsregisters)
                .HasForeignKey(d => d.Iduser)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("fk_user_pet_userrelat_user");

            entity.HasOne(d => d.Pet).WithMany(p => p.UserPetsregisters)
                .HasForeignKey(d => d.Petid)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("fk_user_pet_petrelati_pet");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
