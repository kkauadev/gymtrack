import { DefaultEntity } from '@src/shared/module/persistence/typeorm/entity/default.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { ExerciseType } from '../../core/enum/exercise-type.enum';
import { Training } from './training.entity';

@Entity({ name: 'exercises' })
export class Exercise extends DefaultEntity<Exercise> {
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'enum', enum: ExerciseType, nullable: false })
  type: ExerciseType;

  @Column({ type: 'int', nullable: false })
  setsNumber: number;

  @Column({ type: 'int', nullable: false })
  repsNumber: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  observation: string;

  @ManyToOne(() => Training, (training) => training.exercises, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  training: Training;
}