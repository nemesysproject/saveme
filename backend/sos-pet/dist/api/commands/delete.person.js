"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePerson = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/**
 * Elimina un registro de la tabla 'person'.
 * @param id ID de la persona a eliminar.
 */
const deletePerson = (id) => {
    return prisma.person.delete({
        where: { id },
    });
};
exports.deletePerson = deletePerson;
