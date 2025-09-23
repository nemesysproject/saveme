import { Request, Response } from 'express';
import { CreatePetkindDto, UpdatePetkindDto } from '../models/petkind-dto';
import { CreatePetkindCommand } from '../commands/create.petkind.command';
import {
  handleCreatePetkind,
  handleDeletePetkind,
  handleGetAllPetkinds,
  handleUpdatePetkind,
} from '../handlers/petkind.handler';
import { Prisma } from '../../../generated/prisma';
import { NotFoundError } from '../errors/not-found.error';

export const getAllPetkindsController = async (_req: Request, res: Response) => {
  try {
    const petkinds = await handleGetAllPetkinds();
    res.status(200).json(petkinds);
  } catch (error) {
    console.error('Error al obtener los tipos de mascota:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

export const createPetkindController = async (req: Request, res: Response) => {
  try {
    const dto: CreatePetkindDto = req.body;
    const command = new CreatePetkindCommand(dto);
    const petkind = await handleCreatePetkind(command);
    res.status(201).json(petkind);
  } catch (error) {
    console.error('Error al crear el tipo de mascota:', error);
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return res.status(409).json({ message: 'Ya existe un tipo de mascota con ese nombre.' });
    }
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

export const updatePetkindController = async (req: Request, res: Response) => {
  try {
    const dto: UpdatePetkindDto = req.body;
    const idkind = parseInt(req.params.id, 10);
    const petkind = await handleUpdatePetkind(idkind, dto);
    res.status(200).json(petkind);
  } catch (error) {
    console.error('Error al actualizar el tipo de mascota:', error);
    if (error instanceof NotFoundError) {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

export const deletePetkindController = async (req: Request, res: Response) => {
  try {
    const idkind = parseInt(req.params.id, 10);
    await handleDeletePetkind(idkind);
    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar el tipo de mascota:', error);
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return res.status(404).json({ message: 'El tipo de mascota no fue encontrado.' });
    }
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};