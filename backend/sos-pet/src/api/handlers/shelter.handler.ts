import { PrismaClient } from '@prisma/client';
import { CreateShelterCommand } from '../commands/create.shelter.command';
import { UpdateShelterDto } from '../models/shelter-dto';

const prisma = new PrismaClient();

export const handleGetAllShelters = async () => {
  return await prisma.shelter.findMany();
};

export const handleCreateShelter = async (command: CreateShelterCommand) => {
  const { sheltername, address, phone, zip } = command.dto;

  if (!sheltername) {
    throw new Error('El nombre del refugio (sheltername) es obligatorio.');
  }

  return await prisma.shelter.create({
    data: {
      sheltername,
      address,
      phone,
      zip,
    },
  });
};

export const handleUpdateShelter = async (id: number, dto: UpdateShelterDto) => {
  return await prisma.shelter.update({
    where: { id: id },
    data: dto,
  });
};

export const handleDeleteShelter = async (id: number) => {
  await prisma.shelter.delete({
    where: { id: id },
  });
};