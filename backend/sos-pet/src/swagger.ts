import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SOS-Pet API',
      version: '1.0.0',
      description: 'Documentación de la API para el backend del servicio SOS-Pet.',
    },
  },
  apis: [
    './src/api/routes/*.ts',        // <-- Asegúrate de que esta ruta es correcta
    './src/api/controllers/*.ts'    // <-- Puedes agregar más rutas si tienes anotaciones en otros archivos
  ],
};

export const swaggerSpec = swaggerJSDoc(options);