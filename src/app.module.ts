import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { ConfigModule } from './shared/module/config/config.module';
import { IdentityModule } from './module/identity/identity.module';
import { TrainingPlanModule } from './module/training-plan/training-plan.module';
import { BillingModule } from './module/billing/billing.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    ConfigModule.forRoot(),
    BillingModule,
    IdentityModule,
    TrainingPlanModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}
