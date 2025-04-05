/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     24/03/2025 08:46:21 a. m.                    */
/*==============================================================*/


DROP INDEX IF EXISTS pets.LOCAALIZATIONHISTORY_FK CASCADE;

DROP  INDEX IF EXISTS pets.PICTUREPLACES_FK CASCADE;

DROP  INDEX IF EXISTS pets.HISTORY_PLACE_PK CASCADE;

DROP  TABLE IF EXISTS pets.HISTORY_PLACE CASCADE;

DROP  INDEX IF EXISTS medias.MEDIATYPE_PK CASCADE;

DROP  TABLE IF EXISTS medias.MEDIATYPE CASCADE;

DROP  INDEX IF EXISTS pets.PET_STATES_FK CASCADE;

DROP  INDEX IF EXISTS pets.PET_PK CASCADE;

DROP  TABLE IF EXISTS pets.PET CASCADE;

DROP  INDEX IF EXISTS medias.MEDIATYPES_FK CASCADE;

DROP  INDEX IF EXISTS medias.PETPICTURES_FK CASCADE;

DROP  INDEX IF EXISTS medias.PET_MEDIA_PK CASCADE;

DROP  TABLE IF EXISTS medias.PET_MEDIA CASCADE;

DROP  INDEX IF EXISTS pets.PETRELATIONSHELTERS_FK CASCADE;

DROP  INDEX IF EXISTS pets.PET_SHELTERS_PK CASCADE;

DROP  TABLE IF EXISTS pets.PET_SHELTERS CASCADE;

DROP  INDEX IF EXISTS PET_STATUS_PK CASCADE;

DROP  TABLE IF EXISTS pets.PET_STATUS CASCADE;

DROP  INDEX IF EXISTS pets.SHELTER_PK CASCADE;

DROP  TABLE IF EXISTS pets.SHELTER CASCADE;

DROP  INDEX IF EXISTS users.USER_PK CASCADE;

DROP  TABLE IF EXISTS APP_USER CASCADE;

DROP  INDEX IF EXISTS users.PETRELATIONUSERS_FK CASCADE;

DROP  INDEX IF EXISTS users.USER_PETSREGISTER_PK CASCADE;

DROP  TABLE IF EXISTS users.USER_PETSREGISTER CASCADE;

/*==============================================================*/
/* Table: pets.HISTORY_PLACE                                         */
/*==============================================================*/
create table pets.HISTORY_PLACE (
   IDPLACE              SERIAL               not null,
   IDPETMEDIA           INTEGER                 null,
   IDUSER               VARCHAR(50)          null,
   PETID                VARCHAR(50)          null,
   GEOLOCATION          VARCHAR(255)         null,
   RECORDDATE           DATE                 null,
   constraint PK_HISTORY_PLACE primary key (IDPLACE)
);

/*==============================================================*/
/* Index: pets.HISTORY_PLACE_PK                                      */
/*==============================================================*/
create unique index HISTORY_PLACE_PK on pets.HISTORY_PLACE (
IDPLACE
);

/*==============================================================*/
/* Index: pets.PICTUREPLACES_FK                                      */
/*==============================================================*/
create  index PICTUREPLACES_FK on pets.HISTORY_PLACE (
IDPETMEDIA
);

/*==============================================================*/
/* Index: pets.LOCAALIZATIONHISTORY_FK                               */
/*==============================================================*/
create  index LOCAALIZATIONHISTORY_FK on pets.HISTORY_PLACE (
IDUSER,
PETID
);

/*==============================================================*/
/* Table: medias.MEDIATYPE                                             */
/*==============================================================*/
create table medias.MEDIATYPE (
   IDMEDIA              INTEGER                 not null,
   DESCRIPTION          VARCHAR(255)         null,
   constraint PK_MEDIATYPE primary key (IDMEDIA)
);

comment on table medias.MEDIATYPE is
'JPG
PNG
MP4
MVM
AVI';

/*==============================================================*/
/* Index: medias.MEDIATYPE_PK                                          */
/*==============================================================*/
create unique index MEDIATYPE_PK on medias.MEDIATYPE (
IDMEDIA
);

/*==============================================================*/
/* Table: pets.PET                                                   */
/*==============================================================*/
create table pets.PET (
   PETID                VARCHAR(50)          not null,
   IDSTATUS             INTEGER                 null,
   ALIAS                VARCHAR(255)         null,
   OBSERVATION          TEXT                 null,
   RECORDDATE           DATE                 null,
   UPDATEDATE           DATE                 null,
   ACTIVE               BOOL                 null,
   constraint PK_PET primary key (PETID)
);

/*==============================================================*/
/* Index: pets.PET_PK                                                */
/*==============================================================*/
create unique index PET_PK on pets.PET (
PETID
);

/*==============================================================*/
/* Index: pets.PET_STATES_FK                                         */
/*==============================================================*/
create  index PET_STATES_FK on pets.PET (
IDSTATUS
);

/*==============================================================*/
/* Table: medias.PET_MEDIA                                             */
/*==============================================================*/
create table medias.PET_MEDIA (
   IDPETMEDIA           INTEGER                 not null,
   PETID                VARCHAR(50)          null,
   IDMEDIA              INTEGER                 null,
   RECORDDATE           DATE                 null,
   PICTURE              CHAR(254)            null,
   constraint PK_PET_MEDIA primary key (IDPETMEDIA)
);

/*==============================================================*/
/* Index: medias.PET_MEDIA_PK                                          */
/*==============================================================*/
create unique index PET_MEDIA_PK on medias.PET_MEDIA (
IDPETMEDIA
);

/*==============================================================*/
/* Index: medias.PETPICTURES_FK                                        */
/*==============================================================*/
create  index PETPICTURES_FK on medias.PET_MEDIA (
PETID
);

/*==============================================================*/
/* Index: medias.MEDIATYPES_FK                                         */
/*==============================================================*/
create  index MEDIATYPES_FK on medias.PET_MEDIA (
IDMEDIA
);

/*==============================================================*/
/* Table: pets.PET_SHELTERS                                          */
/*==============================================================*/
create table pets.PET_SHELTERS (
   IDSHELTER            INTEGER                 not null,
   PETID                VARCHAR(50)          not null,
   CECKINGDATE          DATE                 null,
   CHECOUTDATE          DATE                 null,
   constraint PK_PET_SHELTERS primary key (IDSHELTER, PETID)
);

/*==============================================================*/
/* Index: pets.PET_SHELTERS_PK                                       */
/*==============================================================*/
create unique index PET_SHELTERS_PK on pets.PET_SHELTERS (
IDSHELTER,
PETID
);

/*==============================================================*/
/* Index: pets.PETRELATIONSHELTERS_FK                                */
/*==============================================================*/
create  index PETRELATIONSHELTERS_FK on pets.PET_SHELTERS (
PETID
);

/*==============================================================*/
/* Table: pets.PET_STATUS                                            */
/*==============================================================*/
create table pets.PET_STATUS (
   IDSTATUS             INTEGER                 not null,
   DESCRIPTION          VARCHAR(100)         null,
   ACTIVE               BOOL                 null,
   constraint PK_PET_STATUS primary key (IDSTATUS)
);

comment on table pets.PET_STATUS is
'In Strerts
In pets.SHELTER
Recued
Adoption
RIP';

/*==============================================================*/
/* Index: PET_STATUS_PK                                         */
/*==============================================================*/
create unique index PET_STATUS_PK on pets.PET_STATUS (
IDSTATUS
);

/*==============================================================*/
/* Table: pets.SHELTER                                               */
/*==============================================================*/
create table pets.SHELTER (
   IDSHELTER            SERIAL               not null,
   SHELTERNAME          VARCHAR(255)         null,
   RECORDDATE           DATE                 null,
   ADDRESS              DATE                 null,
   TELEPHONE            VARCHAR(20)          null,
   GEOLOCATION          VARCHAR(255)         null,
   ACTIVE               BOOL                 null,
   constraint PK_SHELTER primary key (IDSHELTER)
);

/*==============================================================*/
/* Index: pets.SHELTER_PK                                            */
/*==============================================================*/
create unique index SHELTER_PK on pets.SHELTER (
IDSHELTER
);

/*==============================================================*/
/* Table: users.APP_USER                                                */
/*==============================================================*/
create table users.APP_USER (
   IDUSER               VARCHAR(50)          not null,
   FIRSTNAME            VARCHAR(100)         null,
   MIDDLENAME           VARCHAR(100)         null,
   LASTNAME             VARCHAR(100)         null,
   EMAIL                VARCHAR(100)         null,
   TELEPHONE            VARCHAR(20)          null,
   RECORDDATE           DATE                 null,
   ACTIVE               BOOL                 null,
   constraint PK_USER primary key (IDUSER)
);

/*==============================================================*/
/* Index: users.USER_PK                                               */
/*==============================================================*/
create unique index USER_PK on users.APP_USER (
IDUSER
);

/*==============================================================*/
/* Table: users.USER_PETSREGISTER                                     */
/*==============================================================*/
create table users.USER_PETSREGISTER (
   IDUSER               VARCHAR(50)          not null,
   PETID                VARCHAR(50)          not null,
   RECORDDATE           DATE                 null,
   constraint PK_USER_PETSREGISTER primary key (IDUSER, PETID)
);

/*==============================================================*/
/* Index: users.USER_PETSREGISTER_PK                                  */
/*==============================================================*/
create unique index USER_PETSREGISTER_PK on users.USER_PETSREGISTER (
IDUSER,
PETID
);

/*==============================================================*/
/* Index: users.PETRELATIONUSERS_FK                                   */
/*==============================================================*/
create  index PETRELATIONUSERS_FK on users.USER_PETSREGISTER (
PETID
);

alter table pets.HISTORY_PLACE
   add constraint FK_HISTORY__LOCAALIZA_USER_PET foreign key (IDUSER, PETID)
      references users.USER_PETSREGISTER (IDUSER, PETID)
      on delete restrict on update restrict;

alter table pets.HISTORY_PLACE
   add constraint FK_HISTORY__PICTUREPL_PET_MEDI foreign key (IDPETMEDIA)
      references medias.PET_MEDIA (IDPETMEDIA)
      on delete restrict on update restrict;

alter table pets.PET
   add constraint FK_PET_PET_STATE_PET_STAT foreign key (IDSTATUS)
      references pets.PET_STATUS (IDSTATUS)
      on delete restrict on update restrict;

alter table medias.PET_MEDIA
   add constraint FK_PET_MEDI_MEDIATYPE_MEDIATYP foreign key (IDMEDIA)
      references medias.MEDIATYPE (IDMEDIA)
      on delete restrict on update restrict;

alter table medias.PET_MEDIA
   add constraint FK_PET_MEDI_PETPICTUR_PET foreign key (PETID)
      references pets.PET (PETID)
      on delete restrict on update restrict;

alter table pets.PET_SHELTERS
   add constraint FK_PET_SHEL_PETRELATI_PET foreign key (PETID)
      references pets.PET (PETID)
      on delete restrict on update restrict;

alter table pets.PET_SHELTERS
   add constraint FK_PET_SHEL_SHELTERRE_SHELTER foreign key (IDSHELTER)
      references pets.SHELTER (IDSHELTER)
      on delete restrict on update restrict;

alter table users.USER_PETSREGISTER
   add constraint FK_USER_PET_PETRELATI_PET foreign key (PETID)
      references pets.PET (PETID)
      on delete restrict on update restrict;

alter table users.USER_PETSREGISTER
   add constraint FK_USER_PET_USERRELAT_USER foreign key (IDUSER)
      references users.APP_USER (IDUSER)
      on delete restrict on update restrict;

