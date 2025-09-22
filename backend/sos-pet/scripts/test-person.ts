// Script para probar la consulta de la tabla "person" con Prisma (TypeScript)
 
import { PrismaClient, person } from '../generated/prisma';

const prisma = new PrismaClient();

async function main(): Promise<void> {
    const people: person[] = await prisma.person.findMany();
    console.log('Personas encontradas:', people);
}

main()
    .catch((e) => {
        console.error('Error en el script:', e);
        process.exit(1);
    })
    .finally(async () => {
        console.log('Desconectando Prisma...');
        await prisma.$disconnect();
    });