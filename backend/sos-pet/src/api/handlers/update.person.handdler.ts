// import { PrismaClient } from '../../../generated/prisma';
 import { PrismaClient } from '@prisma/client';
import { UpdatePersonDto } from '../models/person-dto';

const prisma = new PrismaClient();

export const handleUpdatePerson = async (id: number, dto: UpdatePersonDto) => {
  return prisma.person.update({
    where: {  id },
    data: dto,
  });
}