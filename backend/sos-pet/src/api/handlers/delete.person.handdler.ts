import { PrismaClient, person } from '../../../generated/prisma';

const prisma = new PrismaClient();

export const handleDeletePerson = async (idperson: bigint) => {
    await prisma.person.delete({
        where: { idperson },
    });
};
