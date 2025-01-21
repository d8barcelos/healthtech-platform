import { Controller, Post, Body, Get } from '@nestjs/common';
import { HealthMonitoringService } from './health-monitoring.service';
import { CreateHealthMonitoringDto } from './dtos/create-health-monitoring.dto';

@Controller('health-monitoring')
export class HealthMonitoringController {
    constructor(private readonly healthMonitoringService: HealthMonitoringService) {}

    @Post()
    createHealthMonitoring(@Body() createHealthMonitoringDto: CreateHealthMonitoringDto) {
        return this.healthMonitoringService.createHealthMonitoring(createHealthMonitoringDto);
    }

    @Get()
    getAllHealthMonitoring() {
        return this.healthMonitoringService.getAllHealthMonitoring();
    }
}