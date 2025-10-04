import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Obtiene todos los registros de la tabla 'shelter'.
 */
export const getAllShelters = () => {
  return prisma.shelter.findMany();
};