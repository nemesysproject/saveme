import { Router } from 'express';
//import { getPeopleHandler } from '../controllers/person.controller';
import { getAllPeopleController, createPersonController, updatePersonController, deletePersonController } from '../controllers/person.controller';
const router = Router();

/**
 * @openapi
 * /api/people:
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
router.get('/people', getAllPeopleController);

/**
 * @openapi
 * /api/people:
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
router.post('/people', createPersonController);

/**
 * @openapi
 * /api/people/{id}:
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
router.put('/people/:id', updatePersonController);

/**
 * @openapi
 * /api/people/{id}:
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
router.delete('/people/:id', deletePersonController);



export default router;