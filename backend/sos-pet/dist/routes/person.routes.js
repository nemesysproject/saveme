"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const person_controller_1 = require("../controllers/person.controller");
const router = (0, express_1.Router)();
// Definimos la ruta GET /people
router.get('/people', person_controller_1.getPeopleHandler);
exports.default = router;
