import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import { ApplicationRepository } from './application.repository';

describe('Application Controller', () => {
  let controller: ApplicationController;
  let service: ApplicationService;
  let repository: ApplicationRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplicationController],
      providers: [ApplicationService, ApplicationRepository],
    }).compile();

    service = module.get<ApplicationService>(ApplicationService);
    controller = module.get<ApplicationController>(ApplicationController);
    repository = module.get<ApplicationRepository>(ApplicationRepository);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
