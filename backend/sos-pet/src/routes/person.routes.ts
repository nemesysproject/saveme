import { Router } from 'express';
import { getPeopleHandler } from '../controllers/person.controller';

const router = Router();

/**
 * @openapi
 * /api/people:
 *   get:
 *     summary: Obtiene una lista de todas las personas
 *     tags: [People]
 *     description: Retorna un array con todos los registros de la tabla 'person'.
 *     responses:
 *       200:
 *         description: Una lista de personas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: El ID de la persona.
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: El nombre de la persona.
 *                     example: "Jane Doe"
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/people', getPeopleHandler);

export default router;