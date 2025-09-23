import { CreatePetDto } from '../models/pet-dto';

export class CreatePetCommand {
  constructor(public readonly dto: CreatePetDto) {}
}