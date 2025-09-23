import { Request, Response } from 'express';
import { CreatePetDto, UpdatePetDto } from '../models/pet-dto';
import { CreatePetCommand } from '../commands/create.pet.command';
import { handleCreatePet, handleDeletePet, handleGetAllPets, handleUpdatePet } from '../handlers/pet.handler';

/**
 * Manejador para obtener todas las mascotas.
 */
export const getAllPetsController = async (_req: Request, res: Response) => {
  try {
    const pets = await handleGetAllPets();
    res.status(200).json(pets);
  } catch (error) {
    console.error('Error al obtener las mascotas:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

export const createPetController = async (req: Request, res: Response) => {
  try {
    const dto: CreatePetDto = req.body;
    const command = new CreatePetCommand(dto);
    const pet = await handleCreatePet(command);
    res.status(201).json(pet);
  } catch (error) {
    console.error('Error al crear la mascota:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

export const updatePetController = async (req: Request, res: Response) => {
  try {
    const dto: UpdatePetDto = req.body;
    const idpet = BigInt(req.params.id);
    const pet = await handleUpdatePet(idpet, dto);
    res.status(200).json(pet);
  } catch (error) {
    console.error('Error al actualizar la mascota:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

export const deletePetController = async (req: Request, res: Response) => {
  try {
    const idpet = BigInt(req.params.id);
    await handleDeletePet(idpet);
    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar la mascota:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};