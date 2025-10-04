"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllShelters = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/**
 * Obtiene todos los registros de la tabla 'shelter'.
 */
const getAllShelters = () => {
    return prisma.shelter.findMany();
};
exports.getAllShelters = getAllShelters;
