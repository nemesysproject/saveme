import { Router } from 'express';
import { getSheltersHandler } from '../controllers/shelter.controller';

const router = Router();

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
router.get('/shelters', getSheltersHandler);

export default router;