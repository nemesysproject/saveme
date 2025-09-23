"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePersonController = exports.updatePersonController = exports.createPersonController = exports.getAllPeopleController = void 0;
const create_person_1 = require("../commands/create.person");
const updatePerson_handdler_1 = require("../handlers/updatePerson.handdler");
const deletePerson_handdler_1 = require("../handlers/deletePerson.handdler");
const createPerson_handler_1 = require("../handlers/createPerson.handler");
const getAllPeople_handdler_1 = require("../handlers/getAllPeople.handdler");
/// Manejadores para las operaciones CRUD de 'person'
const getAllPeopleController = async (_req, res) => {
    try {
        const people = await (0, getAllPeople_handdler_1.handleGetAllPeople)();
        res.json(people);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllPeopleController = getAllPeopleController;
const createPersonController = async (req, res) => {
    try {
        const dto = req.body;
        // Aquí puedes agregar validación del DTO si lo deseas
        const command = new create_person_1.CreatePersonCommand(dto);
        const person = await (0, createPerson_handler_1.handleCreatePerson)(command);
        res.status(201).json(person);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.createPersonController = createPersonController;
/**
 * Manejador para actualizar una persona existente.
 */
const updatePersonController = async (req, res) => {
    try {
        console.log('Cuerpo de la solicitud:', req.body);
        const dto = req.body;
        console.log('dto:', dto);
        const idperson = BigInt(req.params.id);
        const person = await (0, updatePerson_handdler_1.handleUpdatePerson)(idperson, dto);
        res.status(200).json(person);
    }
    catch (error) {
        console.error('Error al actualizar la persona:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
exports.updatePersonController = updatePersonController;
/**
 * Manejador para eliminar una persona existente.
 */
const deletePersonController = async (req, res) => {
    try {
        const idperson = BigInt(req.params.id);
        await (0, deletePerson_handdler_1.handleDeletePerson)(idperson);
        res.status(204).send();
    }
    catch (error) {
        console.error('Error al eliminar la persona:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
exports.deletePersonController = deletePersonController;
