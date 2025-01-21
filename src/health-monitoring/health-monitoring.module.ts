import { Module } from '@nestjs/common';
import { HealthMonitoringController } from './health-monitoring.controller';
import { HealthMonitoringService } from './health-monitoring.service';
import { PdfService } from '../report/report.service';

@Module({
    controllers: [HealthMonitoringController],
    providers: [HealthMonitoringService, PdfService],
})
export class HealthMonitoringModule {}