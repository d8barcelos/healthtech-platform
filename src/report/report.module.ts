import { Module } from '@nestjs/common';
import { PdfService } from './report.service';

@Module({
  providers: [PdfService]
})
export class ReportModule {}
