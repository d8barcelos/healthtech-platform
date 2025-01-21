import { Injectable } from '@nestjs/common';
import { CreateHealthMonitoringDto } from './dtos/create-health-monitoring.dto';
import medications, { Medication } from '../medications/data/medications';

@Injectable()
export class HealthMonitoringService {
    private healthData: CreateHealthMonitoringDto[] = [];

    createHealthMonitoring(data: CreateHealthMonitoringDto): { data: CreateHealthMonitoringDto, analysis: string, recommendation: string } {
        this.healthData.push(data);
        const analysis = this.analyzeHealthData(data);
        const recommendation = this.recommendAction(data);
        return { data, analysis, recommendation };
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

        if (data.heartRate > 100) {
            const medication = medications.find(med => med.name === 'Amlodipine');
            if (medication) {
                recommendation += `Consider taking ${medication.name} (${medication.dosage}) for high heart rate. `;
            }
        }

        return recommendation;
    }
}