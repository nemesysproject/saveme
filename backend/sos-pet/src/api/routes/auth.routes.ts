import { Router } from 'express';
import { registerController, loginController, refreshTokenController, logoutController } from '../controllers/auth.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterDto'
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente, devuelve un token JWT.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Datos de entrada inválidos.
 *       409:
 *         description: El email ya está en uso.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/auth/register', registerController);


/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     summary: Inicia sesión para obtener un token JWT
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginDto'
 *     responses:
 *       200:
 *         description: Login exitoso, devuelve un token JWT.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Datos de entrada inválidos (ej. falta el email).
 *       401:
 *         description: Credenciales inválidas.
 */
router.post('/auth/login', loginController);

/**
 * @openapi
 * /api/auth/refresh:
 *   post:
 *     summary: Refresca un token JWT existente
 *     tags:
 *       - Auth
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Token refrescado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       401:
 *         description: No autorizado (token inválido, expirado o no proporcionado).
 */
router.post('/auth/refresh', authMiddleware, refreshTokenController);

/**
 * @openapi
 * /api/auth/logout:
 *   post:
 *     summary: Cierra la sesión del usuario
 *     tags:
 *       - Auth
 *     security:
 *       - BearerAuth: []
 *     description: >
 *       Invalida la sesión del lado del cliente. El cliente debe eliminar el token JWT
 *       de su almacenamiento local tras recibir una respuesta exitosa.
 *     responses:
 *       200:
 *         description: Cierre de sesión exitoso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Cierre de sesión exitoso. El cliente debe descartar el token.
 *       401:
 *         description: No autorizado.
 */
router.post('/auth/logout', authMiddleware, logoutController);

export default router;