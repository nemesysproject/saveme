import { PrismaClient } from '../../../generated/prisma';
import { CreatePersonDto } from '../models/person-dto';

const prisma = new PrismaClient();

/**
 * Comando para crear una persona.
 */
export class CreatePersonCommand {
  constructor(public readonly data: CreatePersonDto) {}
}