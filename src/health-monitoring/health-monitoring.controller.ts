import { Controller, Post, Body, Get, Res } from '@nestjs/common';
import { HealthMonitoringService } from './health-monitoring.service';
import { CreateHealthMonitoringDto } from './dtos/create-health-monitoring.dto';
import { Response } from 'express';

@Controller('health-monitoring')
export class HealthMonitoringController {
    constructor(private readonly healthMonitoringService: HealthMonitoringService) {}

    @Post()
    async createHealthMonitoring(@Body() createHealthMonitoringDto: CreateHealthMonitoringDto, @Res() res: Response) {
        const { pdf } = await this.healthMonitoringService.createHealthMonitoring(createHealthMonitoringDto);
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename=health-monitoring-report.pdf',
            'Content-Length': pdf.length,
        });
        res.end(pdf);
    }

    @Get()
    getAllHealthMonitoring() {
        return this.healthMonitoringService.getAllHealthMonitoring();
    }
}