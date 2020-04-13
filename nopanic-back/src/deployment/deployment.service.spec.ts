import { Test, TestingModule } from '@nestjs/testing';
import { DeploymentService } from './deployment.service';
import { DeploymentRepository } from './deployment.repository';

describe('Deployment Service', () => {
  let service: DeploymentService;
  let repository: DeploymentRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeploymentService, DeploymentRepository],
    }).compile();

    service = module.get<DeploymentService>(DeploymentService);
    repository = module.get<DeploymentRepository>(DeploymentRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
