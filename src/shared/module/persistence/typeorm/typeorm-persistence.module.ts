import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@src/shared/module/config/config.module';
import { DefaultEntity } from './entity/default.entity';
import { TypeOrmMigrationService } from './service/typeorm-migration.service';
import { ConfigService } from '@src/shared/module/config/service/config.service';

@Module({})
export class TypeOrmPersistenceModule {
  static forRoot(options: {
    migrations?: string[];
    entities?: Array<typeof DefaultEntity>;
  }): DynamicModule {
    return {
      module: TypeOrmPersistenceModule,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule.forRoot()],
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => {
            return {
              type: 'postgres',
              logging: false,
              autoLoadEntities: false,
              synchronize: true,
              migrationsTableName: 'typeorm_migrations',
              ...configService.get('database'),
              ...options,
            };
          },
        }),
      ],
      providers: [TypeOrmMigrationService],
      exports: [TypeOrmMigrationService],
    };
  }
}
