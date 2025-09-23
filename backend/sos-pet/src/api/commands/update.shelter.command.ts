import { UpdateShelterDto } from '../models/shelter-dto';

export class UpdateShelterCommand {
  constructor(
    public readonly id: bigint,
    public readonly dto: UpdateShelterDto
  ) {}
}