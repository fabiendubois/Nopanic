import { Module } from '@nestjs/common';
import { DeploymentController } from './deployment.controller';
import { DeploymentService } from './deployment.service';
import { DeploymentRepository } from './deployment.repository';

@Module({
  controllers: [DeploymentController],
  providers: [DeploymentService, DeploymentRepository]
})
export class DeploymentModule {}
