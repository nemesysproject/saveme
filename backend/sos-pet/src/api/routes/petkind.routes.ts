import { Router } from 'express';
import {
  createPetkindController,
  deletePetkindController,
  getAllPetkindsController,
  updatePetkindController,
} from '../controllers/petkind.controller';

const router = Router();

/**
 * @openapi
 * /api/petkinds:
 *   get:
 *     summary: Obtiene una lista de todos los tipos de mascotas
 *     tags: [Petkinds]
 *     responses:
 *       200:
 *         description: Una lista de tipos de mascotas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Petkind'
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/petkinds', getAllPetkindsController);

/**
 * @openapi
 * /api/petkinds:
 *   post:
 *     summary: Crea un nuevo tipo de mascota
 *     tags: [Petkinds]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePetkindDto'
 *     responses:
 *       201:
 *         description: Tipo de mascota creado exitosamente.
 *       409:
 *         description: Conflicto, el tipo de mascota ya existe.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/petkinds', createPetkindController);

/**
 * @openapi
 * /api/petkinds/{id}:
 *   put:
 *     summary: Actualiza un tipo de mascota existente
 *     tags: [Petkinds]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de mascota
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdatePetkindDto'
 *     responses:
 *       200:
 *         description: Tipo de mascota actualizado.
 *       404:
 *         description: Tipo de mascota no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */
router.put('/petkinds/:id', updatePetkindController);

/**
 * @openapi
 * /api/petkinds/{id}:
 *   delete:
 *     summary: Elimina un tipo de mascota
 *     tags: [Petkinds]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de mascota
 *     responses:
 *       204:
 *         description: Tipo de mascota eliminado correctamente.
 *       404:
 *         description: Tipo de mascota no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */
router.delete('/petkinds/:id', deletePetkindController);

export default router;