import { PrismaClient } from '../../../generated/prisma';
import { CreatePetCommand } from '../commands/create.pet.command';
import { UpdatePetDto } from '../models/pet-dto';

const prisma = new PrismaClient();

export const handleGetAllPets = async () => {
  return await prisma.pet.findMany();
};

export const handleCreatePet = async (command: CreatePetCommand) => {
  const { name, idkind } = command.dto;

  if (!name) {
    throw new Error('El nombre de la mascota (name) es obligatorio.');
  }

  return await prisma.pet.create({
    data: {
      name,
      idkind,
    },
  });
};

export const handleUpdatePet = async (id: bigint, dto: UpdatePetDto) => {
  return await prisma.pet.update({
    where: { idpet: id },
    data: dto,
  });
};

export const handleDeletePet = async (id: bigint) => {
  await prisma.pet.delete({
    where: { idpet: id },
  });
};