"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../generated/prisma");
const person_routes_1 = __importDefault(require("./api/routes/person.routes"));
const pet_routes_1 = __importDefault(require("./api/routes/pet.routes"));
const shelter_routes_1 = __importDefault(require("./api/routes/shelter.routes"));
const petkind_routes_1 = __importDefault(require("./api/routes/petkind.routes"));
const auth_routes_1 = __importDefault(require("./api/routes/auth.routes"));
const cors_1 = __importDefault(require("cors"));
const swagger_1 = require("./swagger");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
require("dotenv/config"); // Carga las variables de entorno desde .env
// Solución para el error "Do not know how to serialize a BigInt" al usar res.json()
BigInt.prototype.toJSON = function () {
    return this.toString();
};
const app = (0, express_1.default)();
const prisma = new prisma_1.PrismaClient();
const PORT = process.env.PORT || 3000;
// Middlewares
// Habilita CORS para todas las rutas y orígenes
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de SOS-Pet!');
});
// Usamos las rutas de autenticación
app.use('/api', auth_routes_1.default);
// Usamos las rutas de personas
app.use('/api', person_routes_1.default);
app.use('/api', pet_routes_1.default);
app.use('/api', shelter_routes_1.default);
app.use('/api', petkind_routes_1.default);
// Ruta para servir la especificación de Swagger en formato JSON
app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swagger_1.swaggerSpec);
});
// Configura Swagger UI para que esté siempre disponible en desarrollo
app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
