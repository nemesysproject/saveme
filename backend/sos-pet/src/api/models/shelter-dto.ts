/**
 * Data Transfer Object para la creación de un refugio.
 */
export interface CreateShelterDto {
  sheltername: string;
  address?: string;
  phone?: string;
  zip?: string;
}

/**
 * Data Transfer Object para la actualización de un refugio.
 */
export interface UpdateShelterDto {
  sheltername?: string;
  address?: string;
  phone?: string;
  zip?: string;
}