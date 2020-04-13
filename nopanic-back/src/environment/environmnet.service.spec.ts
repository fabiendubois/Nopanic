import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentService } from './environment.service';
import { EnvironmentRepository } from './environment.repository';

describe('Environment Service', () => {
  let service: EnvironmentService;
  let repository: EnvironmentRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvironmentService, EnvironmentRepository],
    }).compile();

    service = module.get<EnvironmentService>(EnvironmentService);
    repository = module.get<EnvironmentRepository>(EnvironmentRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
