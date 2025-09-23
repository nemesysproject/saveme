"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePerson = void 0;
const prisma_1 = require("../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
/**
 * Elimina un registro de la tabla 'person'.
 * @param id ID de la persona a eliminar.
 */
const deletePerson = (idperson) => {
    return prisma.person.delete({
        where: { idperson },
    });
};
exports.deletePerson = deletePerson;
