import { Test, TestingModule } from '@nestjs/testing';
import { HealthMonitoringController } from './health-monitoring.controller';

describe('HealthMonitoringController', () => {
  let controller: HealthMonitoringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthMonitoringController],
    }).compile();

    controller = module.get<HealthMonitoringController>(HealthMonitoringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
