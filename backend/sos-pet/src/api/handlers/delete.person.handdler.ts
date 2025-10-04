import { PrismaClient, Person } from '@prisma/client';

const prisma = new PrismaClient();

export const handleDeletePerson = async (id: number) => {
    await prisma.person.delete({
        where: { id },
    });
};
