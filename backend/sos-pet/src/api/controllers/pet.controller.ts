import { Request, Response } from 'express';
import * as petQueries from '../queries/pet.queries';

/**
 * Manejador para obtener todas las mascotas.
 */
export const getPetsHandler = async (req: Request, res: Response) => {
  try {
    const pets = await petQueries.getAllPets();
    res.status(200).json(pets);
  } catch (error) {
    console.error('Error al obtener las mascotas:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};