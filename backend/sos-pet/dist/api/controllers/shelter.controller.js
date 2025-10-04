"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteShelterController = exports.updateShelterController = exports.createShelterController = exports.getAllSheltersController = void 0;
const create_shelter_command_1 = require("../commands/create.shelter.command");
const shelter_handler_1 = require("../handlers/shelter.handler");
/**
 * Manejador para obtener todos los refugios.
 */
const getAllSheltersController = async (_req, res) => {
    try {
        const shelters = await (0, shelter_handler_1.handleGetAllShelters)();
        res.status(200).json(shelters);
    }
    catch (error) {
        console.error('Error al obtener los refugios:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
exports.getAllSheltersController = getAllSheltersController;
const createShelterController = async (req, res) => {
    try {
        const dto = req.body;
        const command = new create_shelter_command_1.CreateShelterCommand(dto);
        const shelter = await (0, shelter_handler_1.handleCreateShelter)(command);
        res.status(201).json(shelter);
    }
    catch (error) {
        console.error('Error al crear el refugio:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
exports.createShelterController = createShelterController;
const updateShelterController = async (req, res) => {
    try {
        const dto = req.body;
        const id = Number(req.params.id);
        const shelter = await (0, shelter_handler_1.handleUpdateShelter)(id, dto);
        res.status(200).json(shelter);
    }
    catch (error) {
        console.error('Error al actualizar el refugio:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
exports.updateShelterController = updateShelterController;
const deleteShelterController = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await (0, shelter_handler_1.handleDeleteShelter)(id);
        res.status(204).send();
    }
    catch (error) {
        console.error('Error al eliminar el refugio:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
exports.deleteShelterController = deleteShelterController;
