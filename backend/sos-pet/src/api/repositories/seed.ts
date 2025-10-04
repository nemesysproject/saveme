import { PrismaClient } from '@prisma/client';

// Inicializa el cliente de Prisma
const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando el proceso de seeding...');

  // Lista de roles a crear. Usamos mayúsculas por convención.
  const rolesToCreate = ['USER', 'ADMIN', 'TESTER'];

  for (const roleName of rolesToCreate) {
    // Usamos 'upsert' para crear el rol solo si no existe.
    // Esto hace que el script se pueda ejecutar múltiples veces sin crear duplicados.
    const role = await prisma.role.upsert({
      where: { name: roleName }, // Condición para buscar
      update: {}, // Si ya existe, no hacemos nada
      create: { name: roleName }, // Si no existe, lo creamos
    });
    console.log(`Rol '${role.name}' creado o ya existente.`);
  }

  console.log('Seeding finalizado.');
}

// Ejecutamos la función principal y manejamos errores
main()
  .catch((e) => {
    console.error('Error durante el seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });