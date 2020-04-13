import { Test, TestingModule } from '@nestjs/testing';
import { DeploymentController } from './deployment.controller';
import { DeploymentService } from './deployment.service';
import { DeploymentRepository } from './deployment.repository';

describe('Deployment Controller', () => {
  let controller: DeploymentController;
  let service: DeploymentService;
  let repository: DeploymentRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeploymentController],
      providers: [DeploymentService, DeploymentRepository],
    }).compile();

    service = module.get<DeploymentService>(DeploymentService);
    controller = module.get<DeploymentController>(DeploymentController);
    repository = module.get<DeploymentRepository>(DeploymentRepository);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
