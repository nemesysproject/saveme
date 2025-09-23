import express, { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import personRoutes from './api/routes/person.routes';
import petRoutes from './api/routes/pet.routes';
import shelterRoutes from './api/routes/shelter.routes';
import cors from 'cors';
import { swaggerSpec } from './swagger';
import swaggerUi from 'swagger-ui-express';

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

// Usamos las rutas de personas
app.use('/api', personRoutes);
app.use('/api', petRoutes);
app.use('/api', shelterRoutes);

// Configura Swagger solo en modo de desarrollo
if (process.env.NODE_ENV === 'development') {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});