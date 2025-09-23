"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePetController = exports.updatePetController = exports.createPetController = exports.getAllPetsController = void 0;
const create_pet_command_1 = require("../commands/create.pet.command");
const pet_handler_1 = require("../handlers/pet.handler");
/**
 * Manejador para obtener todas las mascotas.
 */
const getAllPetsController = async (_req, res) => {
    try {
        const pets = await (0, pet_handler_1.handleGetAllPets)();
        res.status(200).json(pets);
    }
    catch (error) {
        console.error('Error al obtener las mascotas:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
exports.getAllPetsController = getAllPetsController;
const createPetController = async (req, res) => {
    try {
        const dto = req.body;
        const command = new create_pet_command_1.CreatePetCommand(dto);
        const pet = await (0, pet_handler_1.handleCreatePet)(command);
        res.status(201).json(pet);
    }
    catch (error) {
        console.error('Error al crear la mascota:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
exports.createPetController = createPetController;
const updatePetController = async (req, res) => {
    try {
        const dto = req.body;
        const idpet = BigInt(req.params.id);
        const pet = await (0, pet_handler_1.handleUpdatePet)(idpet, dto);
        res.status(200).json(pet);
    }
    catch (error) {
        console.error('Error al actualizar la mascota:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
exports.updatePetController = updatePetController;
const deletePetController = async (req, res) => {
    try {
        const idpet = BigInt(req.params.id);
        await (0, pet_handler_1.handleDeletePet)(idpet);
        res.status(204).send();
    }
    catch (error) {
        console.error('Error al eliminar la mascota:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};
exports.deletePetController = deletePetController;
