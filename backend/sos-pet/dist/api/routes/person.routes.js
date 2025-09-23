"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import { getPeopleHandler } from '../controllers/person.controller';
const person_controller_1 = require("../controllers/person.controller");
const router = (0, express_1.Router)();
router.get('/people', person_controller_1.getPeopleHandler);
/**
 * @openapi
 * /api/people:
 *   post:
 *     summary: Crea una nueva persona
 *     tags: [People]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: El nombre de la persona.
 *                 example: "John Doe"
 *     responses:
 *       201:
 *         description: Persona creada exitosamente.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/people', person_controller_1.createPersonHandler);
/**
 * @openapi
 * /api/people/{id}:
 *   put:
 *     summary: Actualiza una persona existente
 *     tags: [People]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la persona a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: El nombre de la persona.
 *                 example: "Jane Smith"
 *     responses:
 *       200:
 *         description: Persona actualizada exitosamente.
 *       500:
 *         description: Error interno del servidor.
 */
router.put('/people/:id', person_controller_1.updatePersonHandler);
/**
 * @openapi
 * /api/people/{id}:
 *   delete:
 *     summary: Elimina una persona existente
 *     tags: [People]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la persona a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Persona eliminada exitosamente.
 *       500:
 *         description: Error interno del servidor.
 */
router.delete('/people/:id', person_controller_1.deletePersonHandler);
exports.default = router;
