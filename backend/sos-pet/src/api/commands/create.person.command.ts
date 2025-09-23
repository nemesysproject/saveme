import { CreatePersonDto } from "../models/person-dto";

export class CreatePersonCommand{
    constructor(public readonly dto: CreatePersonDto){}
};