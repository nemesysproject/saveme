import { Router } from 'express';
import { getPetsHandler } from '../controllers/pet.controller';

const router = Router();

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
router.get('/pets', getPetsHandler);

export default router;