import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SOS-Pet API',
      version: '1.0.0',
      description: 'Documentación de la API para el backend del servicio SOS-Pet.',
    },
    components: {
      schemas: {
        Person: {
          type: 'object',
          properties: {
            idperson: { type: 'string', example: '1' },
            firstname: { type: 'string', example: 'Juan' },
            middlename: { type: 'string', example: 'Carlos' },
            lastname: { type: 'string', example: 'Pérez' },
            email: { type: 'string', example: 'juan@example.com' },
            phone: { type: 'string', example: '555-1234' },
            register: { type: 'string', format: 'date', example: '2023-09-23' },
            active: { type: 'boolean', example: true }
          },
          required: ['firstname', 'lastname']
        }
      }
    }
  },

  apis: [
    './src/api/routes/*.ts',        // <-- Asegúrate de que esta ruta es correcta
    './src/api/controllers/*.ts'    // <-- Puedes agregar más rutas si tienes anotaciones en otros archivos
  ],
};

export const swaggerSpec = swaggerJSDoc(options);