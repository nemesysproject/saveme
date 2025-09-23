"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pet_controller_1 = require("../controllers/pet.controller");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /api/pets:
 *   get:
 *     summary: Obtiene una lista de todas las mascotas
 *     tags: [Pets]
 *     description: Retorna un array con todos los registros de la tabla 'pet'.
 *     responses:
 *       200:
 *         description: Una lista de mascotas.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/pets', pet_controller_1.getPetsHandler);
exports.default = router;
