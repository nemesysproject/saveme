import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Obtiene todos los registros de la tabla 'pet'.
 */
export const getAllPets = () => {
  return prisma.pet.findMany();
};