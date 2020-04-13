import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentController } from './environment.controller';
import { EnvironmentService } from './environment.service';
import { EnvironmentRepository } from './environment.repository';

describe('Environment Controller', () => {
  let controller: EnvironmentController;
  let service: EnvironmentService;
  let repository: EnvironmentRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvironmentController],
      providers: [EnvironmentService, EnvironmentRepository],
    }).compile();

    service = module.get<EnvironmentService>(EnvironmentService);
    controller = module.get<EnvironmentController>(EnvironmentController);
    repository = module.get<EnvironmentRepository>(EnvironmentRepository);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
