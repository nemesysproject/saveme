"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../generated/prisma");
const person_routes_1 = __importDefault(require("./routes/person.routes"));
const app = (0, express_1.default)();
const prisma = new prisma_1.PrismaClient();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de SOS-Pet!');
});
// Usamos las rutas de personas
app.use('/api', person_routes_1.default);
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
