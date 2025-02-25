import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { TrainingPlanModule } from './module/training-plan/training-plan.module';
import { ConfigModule } from './shared/module/config/config.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    ConfigModule.forRoot(),
    TrainingPlanModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}
