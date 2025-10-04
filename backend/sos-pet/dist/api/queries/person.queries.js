"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPeople = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/**
 * Obtiene todos los registros de la tabla 'person'.
 */
const getAllPeople = () => {
    return prisma.person.findMany();
};
exports.getAllPeople = getAllPeople;
