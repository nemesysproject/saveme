"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import { getPeopleHandler } from '../controllers/person.controller';
const person_controller_1 = require("../controllers/person.controller");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /people:
 *   get:
 *     summary: Obtiene todas las personas
 *     tags:
 *       - Person
 *     responses:
 *       200:
 *         description: Lista de personas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Person'
 */
router.get('/people', person_controller_1.getAllPeopleController);
/**
 * @openapi
 * /people:
 *   post:
 *     summary: Crea una nueva persona
 *     tags:
 *       - Person
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Person'
 *     responses:
 *       201:
 *         description: Persona creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 */
router.post('/people', person_controller_1.createPersonController);
/**
 * @openapi
 * /people/{id}:
 *   put:
 *     summary: Actualiza una persona existente
 *     tags:
 *       - Person
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la persona
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Person'
 *     responses:
 *       200:
 *         description: Persona actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 */
router.put('/people/:id', person_controller_1.updatePersonController);
/**
 * @openapi
 * /people/{id}:
 *   delete:
 *     summary: Elimina una persona
 *     tags:
 *       - Person
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la persona
 *     responses:
 *       204:
 *         description: Persona eliminada correctamente
 */
router.delete('/people/:id', person_controller_1.deletePersonController);
exports.default = router;
