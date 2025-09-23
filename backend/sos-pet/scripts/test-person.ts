// Script para probar la consulta de la tabla "person" con Prisma (TypeScript)
 
import { PrismaClient, person } from '../generated/prisma';

const prisma = new PrismaClient();

async function main(): Promise<void> {
     const people: person[] = await prisma.person.findMany();
     console.log('Personas encontradas:', people);

    //  await prisma.person.delete({ where: { idperson: BigInt(3) } });
    //  console.log('Persona con idperson 1 eliminada.');
    // const newPerson = await prisma.person.create({
    //     data: {
    //         firstname: 'Juan',
    //         lastname: 'Pérez',
    //         email: 'juan.perez@example.com',
    //         phone: '123-456-7890',
    //         //address: 'Calle Falsa 123',
    //         //city: 'Ciudad',
    //     },
    // });
    // console.log('Nueva persona creada:', newPerson);
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