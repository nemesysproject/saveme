import { Prisma, PrismaClient } from '@prisma/client';
import { CreatePersonCommand } from '../commands/create.person.command';
import { ConflictError } from '../errors/conflict.error';

const prisma = new PrismaClient();

export const handleCreatePerson = async (command: CreatePersonCommand) => {
  console.log('Manejador de creación de persona:', command);
  const { firstname, lastname, email, phone } = command.dto;
  
  if (!firstname || !lastname || !email) {
    throw new Error('Los campos firstname, lastname y email son obligatorios.');
  }

  try {
    return await prisma.person.create({
      data: {
        firstname,
        lastname,
        phone,
        user: {
          create: {
            email: email,
            password: 'defaultPassword123', // Asegúrate de manejar las contraseñas de manera segura en producción
            // Asignar un rol por defecto. Asumo que roleId: 2 es un rol de usuario estándar.
            // Deberías ajustar esto según tu lógica de negocio.
            roleId: 2,
          },
        },
      },
    });
  } catch (error) {
    // Captura el error de restricción única de Prisma
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        // El campo único que causa el conflicto está en el modelo User.
        throw new ConflictError(`Ya existe una persona con el email ${email}.`);
      }
    }
    // Vuelve a lanzar otros errores inesperados
    throw error;
  }
};