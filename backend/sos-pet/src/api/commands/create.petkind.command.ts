import { CreatePetkindDto } from '../models/petkind-dto';

export class CreatePetkindCommand {
  constructor(public readonly dto: CreatePetkindDto) {}
}