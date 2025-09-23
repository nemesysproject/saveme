import { Request, Response } from 'express';
import * as shelterQueries from '../queries/shelter.queries';

/**
 * Manejador para obtener todos los refugios.
 */
export const getSheltersHandler = async (req: Request, res: Response) => {
  try {
    const shelters = await shelterQueries.getAllShelters();
    res.status(200).json(shelters);
  } catch (error) {
    console.error('Error al obtener los refugios:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};