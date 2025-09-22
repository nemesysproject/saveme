import { Request, Response } from 'express';
import * as personQueries from '../api/queries/person.queries';

/**
 * Manejador para obtener todas las personas.
 */
export const getPeopleHandler = async (req: Request, res: Response) => {
  try {
    const people = await personQueries.getAllPeople();
    res.status(200).json(people);
  } catch (error) {
    console.error('Error al obtener las personas:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};