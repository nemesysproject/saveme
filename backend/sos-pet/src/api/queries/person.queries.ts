import { PrismaClient, Person } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Obtiene todos los registros de la tabla 'person'.
 */
export const getAllPeople = () => {
  return prisma.person.findMany();
};
