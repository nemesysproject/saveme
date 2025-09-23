"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetAllPeople = void 0;
const person_queries_1 = require("../queries/person.queries");
const handleGetAllPeople = async () => {
    return (0, person_queries_1.getAllPeople)();
};
exports.handleGetAllPeople = handleGetAllPeople;
