import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationService } from './application.service';
import { ApplicationRepository } from './application.repository';

describe('Application Service', () => {
  let service: ApplicationService;
  let repository: ApplicationRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicationService, ApplicationRepository],
    }).compile();

    service = module.get<ApplicationService>(ApplicationService);
    repository = module.get<ApplicationRepository>(ApplicationRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
