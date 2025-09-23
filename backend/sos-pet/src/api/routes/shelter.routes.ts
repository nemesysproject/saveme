import { Router } from 'express';
import { createShelterController, deleteShelterController, getAllSheltersController, updateShelterController } from '../controllers/shelter.controller';

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
router.get('/shelters', getAllSheltersController);

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
router.post('/shelters', createShelterController);

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
router.put('/shelters/:id', updateShelterController);

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
router.delete('/shelters/:id', deleteShelterController);

export default router;