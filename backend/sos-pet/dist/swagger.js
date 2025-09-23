"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = setupSwagger;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const package_json_1 = require("../package.json");
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'SOS-Pet API',
            version: package_json_1.version,
            description: 'Documentación de la API para el backend del servicio SOS-Pet.',
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 3000}`,
                description: 'Servidor de Desarrollo',
            },
        ],
    },
    // Apunta a los archivos que contienen las definiciones de las rutas
    apis: ['./src/routes/*.ts'],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
function setupSwagger(app) {
    // Página de la UI de Swagger
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    console.log(`[Swagger] Documentación disponible en http://localhost:${process.env.PORT || 3000}/api-docs`);
}
