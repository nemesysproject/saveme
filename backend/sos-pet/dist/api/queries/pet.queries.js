"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPets = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/**
 * Obtiene todos los registros de la tabla 'pet'.
 */
const getAllPets = () => {
    return prisma.pet.findMany();
};
exports.getAllPets = getAllPets;
