import { Request, Response } from 'express';

import { CreatePersonCommand } from '../commands/create.person.command';
import { handleUpdatePerson } from '../handlers/update.person.handdler';
import { handleDeletePerson } from '../handlers/delete.person.handdler';
import { CreatePersonDto, UpdatePersonDto } from '../models/person-dto';
import { handleCreatePerson } from '../handlers/create.person.handler';
import { handleGetAllPeople } from '../handlers/get.all.people.handdler';
import { ConflictError } from '../errors/conflict.error';

/// Manejadores para las operaciones CRUD de 'person'
export const getAllPeopleController = async (_req: Request, res: Response) => {
  try {
    const people = await handleGetAllPeople();
    console.log('Personas:', people);
    res.json(people);
  } catch (error) {
    console.error('Error al obtener las personas:', error);
    const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error inesperado.';
    res.status(500).json({ message: 'Error interno del servidor.', error: errorMessage });
  }
};


export const createPersonController = async (req: Request, res: Response) => {
  try {
    const dto: CreatePersonDto = req.body;
    const command = new CreatePersonCommand(dto);
    const person = await handleCreatePerson(command);
    res.status(201).json(person);
  } catch (error) {
    if (error instanceof ConflictError) {
      return res.status(409).json({ message: error.message });
    }
    // Para otros errores, podrías tener un manejo más genérico
    console.error('Error al crear la persona:', error); // Mantén el log para depuración
    const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error inesperado.';
    res.status(500).json({ message: 'Error interno del servidor.', error: errorMessage });
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
    const id = Number(req.params.id);
    const person = await handleUpdatePerson(id, dto);
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
    const id = Number(req.params.id);
    await handleDeletePerson(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar la persona:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};