import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SOS-Pet API',
      version: '1.0.0',
      description: 'API para la gestión de personas, mascotas y refugios para la aplicación SaveMe.',
      contact: {
        name: 'Equipo de Desarrollo',
        email: 'dev@example.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de Desarrollo',
      },
    ],
    components: {
      schemas: {
        // --- Person Schemas ---
        Person: {
          type: 'object',
          properties: {
            idperson: { type: 'string', description: 'ID de la persona (formato BigInt)', example: '1' },
            firstname: { type: 'string', example: 'John' },
            middlename: { type: 'string', nullable: true, example: 'Fitzgerald' },
            lastname: { type: 'string', example: 'Doe' },
            email: { type: 'string', format: 'email', example: 'john.doe@example.com' },
            phone: { type: 'string', nullable: true, example: '1234567890' },
            register: { type: 'string', format: 'date-time', description: 'Fecha de registro' },
            active: { type: 'boolean', example: true },
          },
        },
        CreatePersonDto: {
          type: 'object',
          required: ['firstname', 'lastname', 'email'],
          properties: {
            firstname: { type: 'string', example: 'Jane' },
            lastname: { type: 'string', example: 'Doe' },
            email: { type: 'string', format: 'email', example: 'jane.doe@example.com' },
            phone: { type: 'string', example: '0987654321' },
          },
        },
        UpdatePersonDto: {
          type: 'object',
          properties: {
            firstname: { type: 'string', example: 'Jane' },
            lastname: { type: 'string', example: 'Smith' },
            email: { type: 'string', format: 'email', example: 'jane.smith@example.com' },
            phone: { type: 'string', example: '1122334455' },
          },
        },

        // --- Pet Schemas ---
        Pet: {
          type: 'object',
          properties: {
            idpet: { type: 'string', description: 'ID de la mascota (formato BigInt)', example: '101' },
            name: { type: 'string', example: 'Fido' },
            idkind: { type: 'integer', nullable: true, example: 1, description: 'ID del tipo de animal (ej. 1 para Perro)' },
            register: { type: 'string', format: 'date-time', nullable: true, description: 'Fecha de registro' },
          },
        },
        CreatePetDto: {
          type: 'object',
          required: ['name'],
          properties: {
            name: { type: 'string', example: 'Fido' },
            idkind: { type: 'integer', example: 1 },
          },
        },
        UpdatePetDto: {
          type: 'object',
          properties: {
            name: { type: 'string', example: 'Buddy' },
            idkind: { type: 'integer', example: 1 },
          },
        },

        // --- Shelter Schemas ---
        Shelter: {
          type: 'object',
          properties: {
            idshelter: { type: 'string', description: 'ID del refugio (formato BigInt)', example: '201' },
            sheltername: { type: 'string', example: 'Happy Paws Shelter' },
            address: { type: 'string', example: '123 Main St' },
            phone: { type: 'string', example: '555-1234' },
            zip: { type: 'string', example: '90210' },
            regster: { type: 'string', format: 'date-time', nullable: true, description: 'Fecha de registro' },
          },
        },
        CreateShelterDto: {
          type: 'object',
          required: ['sheltername'],
          properties: {
            sheltername: { type: 'string', example: 'Happy Paws Shelter' },
            address: { type: 'string', example: '123 Main St' },
            phone: { type: 'string', example: '555-1234' },
            zip: { type: 'string', example: '90210' },
          },
        },
        UpdateShelterDto: {
          type: 'object',
          properties: {
            sheltername: { type: 'string', example: 'Happier Paws Shelter' },
            address: { type: 'string', example: '456 Oak Ave' },
            phone: { type: 'string', example: '555-5678' },
            zip: { type: 'string', example: '90211' },
          },
        },

        // --- Petkind Schemas ---
        Petkind: {
          type: 'object',
          properties: {
            idkind: { type: 'integer', example: 1 },
            kind: { type: 'string', example: 'Perro' },
          },
        },
        CreatePetkindDto: {
          type: 'object',
          required: ['idkind', 'kind'],
          properties: {
            idkind: { type: 'integer', example: 10 },
            kind: { type: 'string', example: 'Gato' },
          },
        },
        UpdatePetkindDto: {
          type: 'object',
          properties: {
            kind: { type: 'string', example: 'Conejo' },
          },
        },

        // --- Generic Error Schemas ---
        ErrorResponse: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Error interno del servidor.' },
            error: { type: 'string', example: 'Detalles opcionales del error.' },
          },
          required: ['message'],
        },
        ClientErrorResponse: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'El recurso no fue encontrado.' },
          },
          required: ['message'],
        },
      },
    },
  },
  apis: ['./src/api/routes/*.ts'], // Ruta a los archivos que contienen las anotaciones de OpenAPI
};

export const swaggerSpec = swaggerJsdoc(options);