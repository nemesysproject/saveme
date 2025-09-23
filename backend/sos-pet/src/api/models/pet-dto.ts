/**
 * Data Transfer Object para la creación de una mascota.
 */
export interface CreatePetDto {
  name: string;
  idkind?: number;
}

/**
 * Data Transfer Object para la actualización de una mascota.
 */
export interface UpdatePetDto {
  name?: string;
  idkind?: number;
}