"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePerson = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/**
 * Actualiza un registro existente en la tabla 'person'.
 * @param id ID de la persona a actualizar.
 * @param data Datos de la persona a actualizar.
 */
const updatePerson = (id, data) => {
    return prisma.person.update({
        where: { id },
        data,
    });
};
exports.updatePerson = updatePerson;
