// Script para probar la consulta de la tabla "person" con Prisma (TypeScript)
 
import { PrismaClient, Person } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
     const people: Person[] = await prisma.person.findMany();
     console.log('Personas encontradas:', people);

    //   await prisma.person.delete({ where: { id: Int } });
       console.log('Persona con idperson 1 eliminada.');
    //   const newPerson = await prisma.person.create({
    //       data: {
    //           firstname: 'Juan',
    //           lastname: 'Pérez',
    //           //email: 'juan.perez@example.com',
    //           phone: '123456789',
    //           //idrole: 1,

    //       },
    //   });
    //   console.log('Nueva persona creada:', newPerson);
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