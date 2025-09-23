"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllShelters = void 0;
const prisma_1 = require("../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
/**
 * Obtiene todos los registros de la tabla 'shelter'.
 */
const getAllShelters = () => {
    return prisma.shelter.findMany();
};
exports.getAllShelters = getAllShelters;
