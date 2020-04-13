import { Module } from '@nestjs/common';
import { EnvironmentController } from './environment.controller';
import { EnvironmentService } from './environment.service';
import { EnvironmentRepository } from './environment.repository';

@Module({
  controllers: [EnvironmentController],
  providers: [EnvironmentService, EnvironmentRepository]
})
export class EnvironmentModule { }
