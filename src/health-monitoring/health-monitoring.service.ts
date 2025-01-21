import { Injectable } from '@nestjs/common';
import { CreateHealthMonitoringDto } from './dtos/create-health-monitoring.dto';
import medications from '../medications/data/medications';
import { PdfService } from '../report/report.service';

@Injectable()
export class HealthMonitoringService {
    private healthData: CreateHealthMonitoringDto[] = [];

    constructor(
        private readonly pdfService: PdfService
    ) {}

    async createHealthMonitoring(data: CreateHealthMonitoringDto): Promise<{ pdf: Buffer }> {
        this.healthData.push(data);
        const analysis = this.analyzeHealthData(data);
        const recommendation = this.recommendAction(data);

        const pdf = await this.pdfService.generatePdf(data, analysis, recommendation);
        return { pdf };
    }

    getAllHealthMonitoring(): CreateHealthMonitoringDto[] {
        return this.healthData;
    }

    private analyzeHealthData(data: CreateHealthMonitoringDto): string {
        let analysis = 'Health Analysis: ';

        if (data.heartRate < 60 || data.heartRate > 100) {
            analysis += 'Abnormal heart rate. ';
        } else {
            analysis += 'Normal heart rate. ';
        }

        if (data.bloodPressure !== '120/80') {
            analysis += 'Abnormal blood pressure. ';
        } else {
            analysis += 'Normal blood pressure. ';
        }

        if (data.temperature < 36.1 || data.temperature > 37.2) {
            analysis += 'Abnormal body temperature. ';
        } else {
            analysis += 'Normal body temperature. ';
        }

        if (data.oxygenSaturation < 95) {
            analysis += 'Low oxygen saturation. ';
        } else {
            analysis += 'Normal oxygen saturation. ';
        }

        return analysis;
    }

    private recommendAction(data: CreateHealthMonitoringDto): string {
        let recommendation = 'Recommendation: ';

        if (data.heartRate < 60 || data.heartRate > 100) {
            recommendation += 'Consult a doctor for abnormal heart rate. ';
        }

        if (data.bloodPressure !== '120/80') {
            recommendation += 'Consult a doctor for abnormal blood pressure. ';
        }

        if (data.temperature < 36.1 || data.temperature > 37.2) {
            recommendation += 'Consult a doctor for abnormal body temperature. ';
        }

        if (data.oxygenSaturation < 95) {
            recommendation += 'Consult a doctor for low oxygen saturation. ';
        }

        // Example medication recommendation based on symptoms
        if (data.heartRate > 100) {
            const medication = medications.find(med => med.name === 'Amlodipine');
            if (medication) {
                recommendation += `Consider taking ${medication.name} (${medication.dosage}) for high heart rate. `;
            }
        }

        return recommendation;
    }

    private isCritical(data: CreateHealthMonitoringDto): boolean {
        return data.heartRate < 50 || data.heartRate > 120 ||
               data.bloodPressure !== '120/80' ||
               data.temperature < 35.0 || data.temperature > 38.0 ||
               data.oxygenSaturation < 90;
    }
}