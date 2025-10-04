import { PrismaClient, Person } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Actualiza un registro existente en la tabla 'person'.
 * @param id ID de la persona a actualizar.
 * @param data Datos de la persona a actualizar.
 */
export const updatePerson = (id: number, data: Person) => {
  return prisma.person.update({
    where: { id },
    data,
  });
};