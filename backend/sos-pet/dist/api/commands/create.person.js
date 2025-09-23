"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePersonCommand = void 0;
const prisma_1 = require("../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
/**
 * Comando para crear una persona.
 */
class CreatePersonCommand {
    constructor(data) {
        this.data = data;
    }
}
exports.CreatePersonCommand = CreatePersonCommand;
