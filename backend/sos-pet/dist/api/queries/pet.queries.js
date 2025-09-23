"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPets = void 0;
const prisma_1 = require("../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
/**
 * Obtiene todos los registros de la tabla 'pet'.
 */
const getAllPets = () => {
    return prisma.pet.findMany();
};
exports.getAllPets = getAllPets;
