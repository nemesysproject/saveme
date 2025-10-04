import express, { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

import personRoutes from './api/routes/person.routes';
import petRoutes from './api/routes/pet.routes';
import shelterRoutes from './api/routes/shelter.routes';
import petkindRoutes from './api/routes/petkind.routes';
import authRoutes from './api/routes/auth.routes';
import cors from 'cors';
import { swaggerSpec } from './swagger';
import swaggerUi from 'swagger-ui-express';
import 'dotenv/config'; // Carga las variables de entorno desde .env

// Solución para el error "Do not know how to serialize a BigInt" al usar res.json()
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

// Middlewares
// Habilita CORS para todas las rutas y orígenes
app.use(cors());
app.use(express.json());

// Ruta de bienvenida
app.get('/', (req: Request, res: Response) => {
  res.send('¡Bienvenido a la API de SOS-Pet!');
});

// Usamos las rutas de autenticación
app.use('/api', authRoutes);
// Usamos las rutas de personas
app.use('/api', personRoutes);
app.use('/api', petRoutes);
app.use('/api', shelterRoutes);
app.use('/api', petkindRoutes);

// Ruta para servir la especificación de Swagger en formato JSON
app.get('/api-docs.json', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Configura Swagger UI para que esté siempre disponible en desarrollo
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});