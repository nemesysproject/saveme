import { PrismaClient, Person } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Elimina un registro de la tabla 'person'.
 * @param id ID de la persona a eliminar.
 */
export const deletePerson = (id: number) => {
  return prisma.person.delete({
    where: { id },
  });
};