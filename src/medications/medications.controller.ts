import { Controller, Get, Query } from '@nestjs/common';
import { MedicationsService } from './medications.service';
import { Medication } from './data/medications';

@Controller('medications')
export class MedicationsController {
    constructor(private readonly medicationsService: MedicationsService) {}

    @Get()
    getAllMedications(@Query() query: Partial<Medication>) {
        if (Object.keys(query).length) {
            return this.medicationsService.filterMedications(query);
        }
        return this.medicationsService.getAllMedications();
    }

    @Get(':id')
    getMedication(id: number) {
        return this.medicationsService.getMedicationById(id);
    }

    @Get('search')
    searchMedications(@Query('name') name: string) {
        return this.medicationsService.searchMedicationsByName(name);
    }
}
