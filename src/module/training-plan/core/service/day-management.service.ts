import { Injectable } from '@nestjs/common';
import { DayRepository } from '@src/module/training-plan/persistence/repository/day.repository';

@Injectable()
export class DayManagementService {
  constructor(private readonly dayRepository: DayRepository) {}
}
