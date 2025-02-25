import { DefaultModel, WithOptional } from '@src/shared/core/model/default.model';
import { randomUUID } from 'crypto';
import { TrainingModel } from './training.model';

export class DayModel extends DefaultModel {
  trainingPlanId: string;
  trainings: TrainingModel[];

  private constructor(data: DayModel) {
    super();
    Object.assign(this, data);
  }

  static create(
    data: WithOptional<DayModel, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  ): DayModel {
    return new DayModel({
      ...data,
      id: data.id ? data.id : randomUUID(),
      createdAt: data.createdAt ? data.createdAt : new Date(),
      updatedAt: data.updatedAt ? data.updatedAt : new Date(),
      deletedAt: data.deletedAt ? data.deletedAt : null,
    });
  }

  static createFrom(data: DayModel) {
    return new DayModel(data);
  }
}
