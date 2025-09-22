"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPeople = void 0;
const prisma_1 = require("../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
/**
 * Obtiene todos los registros de la tabla 'person'.
 */
const getAllPeople = () => {
    return prisma.person.findMany();
};
exports.getAllPeople = getAllPeople;
