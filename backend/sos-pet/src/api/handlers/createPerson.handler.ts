import { PrismaClient, person } from '../../../generated/prisma';
import { CreatePersonCommand } from '../commands/create.person';

const prisma = new PrismaClient();

export const handleCreatePerson = async (command: CreatePersonCommand) => {
  return prisma.person.create({ data: command.data });
};