"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCreatePerson = void 0;
const prisma_1 = require("../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const handleCreatePerson = async (command) => {
    console.log('Manejador de creación de persona:', command);
    return prisma.person.create({ data: command.data });
};
exports.handleCreatePerson = handleCreatePerson;
