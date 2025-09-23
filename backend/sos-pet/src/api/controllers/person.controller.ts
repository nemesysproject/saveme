import { Request, Response } from 'express';

import { CreatePersonCommand } from '../commands/create.person';
import { handleUpdatePerson } from '../handlers/updatePerson.handdler';
import { handleDeletePerson } from '../handlers/deletePerson.handdler';
import { CreatePersonDto, UpdatePersonDto } from '../models/person-dto';
import { handleCreatePerson } from '../handlers/createPerson.handler';
import { handleGetAllPeople } from '../handlers/getAllPeople.handdler';

/// Manejadores para las operaciones CRUD de 'person'
export const getAllPeopleController = async (_req: Request, res: Response) => {
  try {
    const people = await handleGetAllPeople();
    res.json(people);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};


export const createPersonController = async (req: Request, res: Response) => {
  try {
    const dto: CreatePersonDto = req.body;
    // Aquí puedes agregar validación del DTO si lo deseas
    const command = new CreatePersonCommand(dto);
    const person = await handleCreatePerson(command);
    res.status(201).json(person);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

/**
 * Manejador para actualizar una persona existente.
 */
export const updatePersonController = async (req: Request, res: Response) => {
  try {
    console.log('Cuerpo de la solicitud:', req.body);
    const dto: UpdatePersonDto = req.body;
    console.log('dto:', dto);
    const idperson = BigInt(req.params.id);
    const person = await handleUpdatePerson(idperson, dto);
    res.status(200).json(person);
  } catch (error) {
    console.error('Error al actualizar la persona:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

/**
 * Manejador para eliminar una persona existente.
 */
export const deletePersonController = async (req: Request, res: Response) => {
  try {
    const idperson = BigInt(req.params.id);
    await handleDeletePerson(idperson);
    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar la persona:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};