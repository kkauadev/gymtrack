import { Injectable } from '@nestjs/common';
import { TrainingPlanRepository } from '@src/module/training-plan/persistence/repository/training-plan.repository';

@Injectable()
export class TrainingPlanManagementService {
  constructor(private readonly trainingPlanRepository: TrainingPlanRepository) {}
}
