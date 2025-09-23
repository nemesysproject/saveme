import { PrismaClient } from '../../../generated/prisma';
import { CreatePersonCommand } from '../commands/create.person.command';

const prisma = new PrismaClient();

export const handleCreatePerson = async (command: CreatePersonCommand) => {
  console.log('Manejador de creación de persona:', command);
  const { firstname, lastname, email, phone } = command.dto;

  // El esquema de Prisma requiere firstname, lastname y email.
  // Añadimos una comprobación en tiempo de ejecución para asegurarnos de que existen,
  // lo que también satisface al verificador de tipos de TypeScript.
  if (!firstname || !lastname || !email) {
    // En una aplicación real, esto debería ser una respuesta de error de validación adecuada.
    throw new Error('Los campos firstname, lastname y email son obligatorios.');
  }

  return prisma.person.create({
    data: { firstname, lastname, email, phone },
  });
};