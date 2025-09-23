"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shelter_controller_1 = require("../controllers/shelter.controller");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /api/shelters:
 *   get:
 *     summary: Obtiene una lista de todos los refugios
 *     tags: [Shelters]
 *     description: Retorna un array con todos los registros de la tabla 'shelter'.
 *     responses:
 *       200:
 *         description: Una lista de refugios.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/shelters', shelter_controller_1.getSheltersHandler);
exports.default = router;
