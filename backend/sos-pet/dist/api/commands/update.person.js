"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePerson = void 0;
const prisma_1 = require("../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
/**
 * Actualiza un registro existente en la tabla 'person'.
 * @param id ID de la persona a actualizar.
 * @param data Datos de la persona a actualizar.
 */
const updatePerson = (idperson, data) => {
    return prisma.person.update({
        where: { idperson },
        data,
    });
};
exports.updatePerson = updatePerson;
