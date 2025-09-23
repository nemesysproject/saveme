// import { PrismaClient } from '../../../generated/prisma';
 import { PrismaClient } from '../../../generated/prisma';
import { UpdatePersonDto } from '../models/person-dto';

const prisma = new PrismaClient();

export const handleUpdatePerson = async (idperson: bigint, dto: UpdatePersonDto) => {
  return prisma.person.update({
    where: { idperson },
    data: dto,
  });
}