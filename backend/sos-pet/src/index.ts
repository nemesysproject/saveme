import express, { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import personRoutes from './routes/person.routes';
import cors from 'cors';
import { setupSwagger } from './swagger';

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

// Configura Swagger solo en modo de desarrollo
if (process.env.NODE_ENV === 'development') {
  setupSwagger(app);
}

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});