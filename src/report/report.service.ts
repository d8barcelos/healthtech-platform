import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import { CreateHealthMonitoringDto } from '../health-monitoring/dtos/create-health-monitoring.dto';

@Injectable()
export class PdfService {
    async generatePdf(data: CreateHealthMonitoringDto, analysis: string, recommendation: string): Promise<Buffer> {
        return new Promise((resolve, reject) => {
            const doc = new PDFDocument({ margin: 50 });
            let buffers = [];
            doc.on('data', buffers.push.bind(buffers));
            doc.on('end', () => {
                const pdfData = Buffer.concat(buffers);
                resolve(pdfData);
            });
            doc.on('error', reject);

            // Title
            doc.fontSize(25)
                .fillColor('#0000FF')
                .text('Health Monitoring Report', { align: 'center' })
                .moveDown(1.5);

            // Patient Data
            doc.fontSize(16)
                .fillColor('#000000')
                .text(`Heart Rate: `, { continued: true })
                .font('Helvetica-Bold')
                .text(`${data.heartRate}`, { continued: true })
                .font('Helvetica')
                .text(' bpm')
                .moveDown(0.5);

            doc.fontSize(16)
                .fillColor('#000000')
                .text(`Blood Pressure: `, { continued: true })
                .font('Helvetica-Bold')
                .text(`${data.bloodPressure}`)
                .moveDown(0.5);

            doc.fontSize(16)
                .fillColor('#000000')
                .text(`Temperature: `, { continued: true })
                .font('Helvetica-Bold')
                .text(`${data.temperature}`, { continued: true })
                .font('Helvetica')
                .text(' °C')
                .moveDown(0.5);

            doc.fontSize(16)
                .fillColor('#000000')
                .text(`Oxygen Saturation: `, { continued: true })
                .font('Helvetica-Bold')
                .text(`${data.oxygenSaturation}`, { continued: true })
                .font('Helvetica')
                .text(' %')
                .moveDown(1.5);

            // Analysis Section
            doc.fontSize(20)
                .fillColor('#FF0000')
                .text('Analysis', { underline: true })
                .moveDown(0.5);

            doc.fontSize(16)
                .fillColor('#000000')
                .text(analysis)
                .moveDown(1.5);

            // Recommendation Section
            doc.fontSize(20)
                .fillColor('#FF0000')
                .text('Recommendation', { underline: true })
                .moveDown(0.5);

            doc.fontSize(16)
                .fillColor('#000000')
                .text(recommendation);

            doc.end();
        });
    }
}