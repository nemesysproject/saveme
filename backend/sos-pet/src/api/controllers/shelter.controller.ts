import { Request, Response } from 'express';
import { CreateShelterDto, UpdateShelterDto } from '../models/shelter-dto';
import { CreateShelterCommand } from '../commands/create.shelter.command';
import { handleCreateShelter, handleDeleteShelter, handleGetAllShelters, handleUpdateShelter } from '../handlers/shelter.handler';

/**
 * Manejador para obtener todos los refugios.
 */
export const getAllSheltersController = async (_req: Request, res: Response) => {
  try {
    const shelters = await handleGetAllShelters();
    res.status(200).json(shelters);
  } catch (error) {
    console.error('Error al obtener los refugios:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

export const createShelterController = async (req: Request, res: Response) => {
  try {
    const dto: CreateShelterDto = req.body;
    const command = new CreateShelterCommand(dto);
    const shelter = await handleCreateShelter(command);
    res.status(201).json(shelter);
  } catch (error) {
    console.error('Error al crear el refugio:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

export const updateShelterController = async (req: Request, res: Response) => {
  try {
    const dto: UpdateShelterDto = req.body;
    const id = Number(req.params.id);
    const shelter = await handleUpdateShelter(id, dto);
    res.status(200).json(shelter);
  } catch (error) {
    console.error('Error al actualizar el refugio:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

export const deleteShelterController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await handleDeleteShelter(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar el refugio:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};