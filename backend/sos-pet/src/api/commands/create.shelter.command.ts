import { CreateShelterDto } from '../models/shelter-dto';

export class CreateShelterCommand {
  constructor(public readonly dto: CreateShelterDto) {}
}