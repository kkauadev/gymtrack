import { Injectable } from '@nestjs/common';
import { ExerciseRepository } from '@src/module/training-plan/persistence/repository/exercise.repository';

@Injectable()
export class ExerciseManagementService {
  constructor(private readonly exerciseRepository: ExerciseRepository) {}
}
