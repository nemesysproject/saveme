import { PrismaClient, person } from '../../../generated/prisma';

const prisma = new PrismaClient();

/**
 * Actualiza un registro existente en la tabla 'person'.
 * @param id ID de la persona a actualizar.
 * @param data Datos de la persona a actualizar.
 */
export const updatePerson = (idperson: bigint, data: person) => {
  return prisma.person.update({
    where: { idperson},
    data,
  });
};