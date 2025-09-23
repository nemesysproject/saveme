import { UpdatePetDto } from '../models/pet-dto';

export class UpdatePetCommand {
  constructor(
    public readonly id: bigint,
    public readonly dto: UpdatePetDto
  ) {}
}