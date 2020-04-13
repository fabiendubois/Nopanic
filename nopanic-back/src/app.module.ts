import { Module } from '@nestjs/common';
import { DeploymentModule } from './deployment/deployment.module';
import { ApplicationModule } from './application/application.module';
import { EnvironmentModule } from './environment/environment.module';

@Module({
  imports: [DeploymentModule, ApplicationModule, EnvironmentModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
