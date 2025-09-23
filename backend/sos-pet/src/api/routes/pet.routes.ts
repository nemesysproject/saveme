import { Router } from 'express';
import { createPetController, deletePetController, getAllPetsController, updatePetController } from '../controllers/pet.controller';

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
router.get('/pets', getAllPetsController);

/**
 * @openapi
 * /api/pets:
 *   post:
 *     summary: Crea una nueva mascota
 *     tags: [Pets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePetDto'
 *     responses:
 *       201:
 *         description: Mascota creada exitosamente.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/pets', createPetController);

/**
 * @openapi
 * /api/pets/{id}:
 *   put:
 *     summary: Actualiza una mascota existente
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la mascota
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdatePetDto'
 *     responses:
 *       200:
 *         description: Mascota actualizada.
 *       500:
 *         description: Error interno del servidor.
 */
router.put('/pets/:id', updatePetController);

/**
 * @openapi
 * /api/pets/{id}:
 *   delete:
 *     summary: Elimina una mascota
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la mascota
 *     responses:
 *       204:
 *         description: Mascota eliminada correctamente.
 *       500:
 *         description: Error interno del servidor.
 */
router.delete('/pets/:id', deletePetController);

export default router;