"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePersonController = exports.updatePersonController = exports.createPersonController = exports.getAllPeopleController = void 0;
const create_person_command_1 = require("../commands/create.person.command");
const update_person_handdler_1 = require("../handlers/update.person.handdler");
const delete_person_handdler_1 = require("../handlers/delete.person.handdler");
const create_person_handler_1 = require("../handlers/create.person.handler");
const get_all_people_handdler_1 = require("../handlers/get.all.people.handdler");
const conflict_error_1 = require("../errors/conflict.error");
/// Manejadores para las operaciones CRUD de 'person'
const getAllPeopleController = async (_req, res) => {
    try {
        const people = await (0, get_all_people_handdler_1.handleGetAllPeople)();
        console.log('Personas:', people);
        res.json(people);
    }
    catch (error) {
        console.error('Error al obtener las personas:', error);
        const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error inesperado.';
        res.status(500).json({ message: 'Error interno del servidor.', error: errorMessage });
    }
};
exports.getAllPeopleController = getAllPeopleController;
const createPersonController = async (req, res) => {
    try {
        const dto = req.body;
        const command = new create_person_command_1.CreatePersonCommand(dto);
        const person = await (0, create_person_handler_1.handleCreatePerson)(command);
        res.status(201).json(person);
    }
    catch (error) {
        if (error instanceof conflict_error_1.ConflictError) {
            return res.status(409).json({ message: error.message });
        }
        // Para otros errores, podrías tener un manejo más genérico
        console.error('Error al crear la persona:', error); // Mantén el log para depuración
        const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error inesperado.';
        res.status(500).json({ message: 'Error interno del servidor.', error: errorMessage });
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
        const id = Number(req.params.id);
        const person = await (0, update_person_handdler_1.handleUpdatePerson)(id, dto);
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
        const id = Number(req.params.id);
        await (0, delete_person_handdler_1.handleDeletePerson)(id);
        res.status(204).send();
    }
    catch (error) {
        console.error('Error al eliminar la persona:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
exports.deletePersonController = deletePersonController;
