"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Script para probar la consulta de la tabla "person" con Prisma (TypeScript)
const client_1 = require("@prisma/client");
//import { PrismaClient, person } from '../generated/prisma';
const prisma = new client_1.PrismaClient();
async function main() {
    const people = await prisma.person.findMany();
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
