import { PrismaClient, person } from '../../../generated/prisma';

const prisma = new PrismaClient();

/**
 * Elimina un registro de la tabla 'person'.
 * @param id ID de la persona a eliminar.
 */
export const deletePerson = (idperson: bigint) => {
  return prisma.person.delete({
    where: { idperson },
  });
};