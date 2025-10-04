import { Prisma, PrismaClient } from '@prisma/client';
import { CreatePetkindCommand } from '../commands/create.petkind.command';
import { UpdatePetkindDto } from '../models/petkind-dto';
import { NotFoundError } from '../errors/not-found.error';

const prisma = new PrismaClient();

export const handleGetAllPetkinds = async () => {
  return await prisma.petkind.findMany();
};

export const handleCreatePetkind = async (command: CreatePetkindCommand) => {
  const { idkind, kind } = command.dto;
  // Según el schema, idkind es un campo requerido que no se autoincrementa.
  if (idkind === undefined || !kind) {
    throw new Error('Los campos idkind y kind son obligatorios.');
  }
  return await prisma.petkind.create({
    data: {
      idkind,
      kind,
    },
  });
};

export const handleUpdatePetkind = async (id: number, dto: UpdatePetkindDto) => {
  const petkind = await prisma.petkind.findUnique({ where: { idkind: id } });
  if (!petkind) {
    throw new NotFoundError(`No se encontró el tipo de mascota con id ${id}`);
  }
  return await prisma.petkind.update({
    where: { idkind: id },
    data: dto,
  });
};

export const handleDeletePetkind = async (id: number) => {
  return await prisma.petkind.delete({
    where: { idkind: id },
  });
};