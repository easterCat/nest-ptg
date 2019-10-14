import { Test, TestingModule } from '@nestjs/testing';
import { WriteService } from './write.service';

describe('WriteService', () => {
  let service: WriteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WriteService],
    }).compile();

    service = module.get<WriteService>(WriteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
