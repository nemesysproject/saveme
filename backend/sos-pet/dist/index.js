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
const cors_1 = __importDefault(require("cors"));
const swagger_1 = require("./swagger");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
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
// Usamos las rutas de personas
app.use('/api', person_routes_1.default);
app.use('/api', pet_routes_1.default);
app.use('/api', shelter_routes_1.default);
// Configura Swagger solo en modo de desarrollo
if (process.env.NODE_ENV === 'development') {
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
}
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
