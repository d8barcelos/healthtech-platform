import { Module } from '@nestjs/common';
import { HealthMonitoringService } from './health-monitoring.service';
import { HealthMonitoringController } from './health-monitoring.controller';

@Module({
  providers: [HealthMonitoringService],
  controllers: [HealthMonitoringController]
})
export class HealthMonitoringModule {}
