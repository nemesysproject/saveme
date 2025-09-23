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
router.get('/shelters', shelter_controller_1.getAllSheltersController);
/**
 * @openapi
 * /api/shelters:
 *   post:
 *     summary: Crea un nuevo refugio
 *     tags: [Shelters]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateShelterDto'
 *     responses:
 *       201:
 *         description: Refugio creado exitosamente.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/shelters', shelter_controller_1.createShelterController);
/**
 * @openapi
 * /api/shelters/{id}:
 *   put:
 *     summary: Actualiza un refugio existente
 *     tags: [Shelters]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del refugio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateShelterDto'
 *     responses:
 *       200:
 *         description: Refugio actualizado.
 *       500:
 *         description: Error interno del servidor.
 */
router.put('/shelters/:id', shelter_controller_1.updateShelterController);
/**
 * @openapi
 * /api/shelters/{id}:
 *   delete:
 *     summary: Elimina un refugio
 *     tags: [Shelters]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del refugio
 *     responses:
 *       204:
 *         description: Refugio eliminado correctamente.
 *       500:
 *         description: Error interno del servidor.
 */
router.delete('/shelters/:id', shelter_controller_1.deleteShelterController);
exports.default = router;
