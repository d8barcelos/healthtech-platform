import { Controller, Get } from '@nestjs/common';
import { MedicationsService } from './medications.service';

@Controller('medications')
export class MedicationsController {
    constructor(private readonly medicationsService: MedicationsService) {}

    @Get()
    getAllMedications() {
        return this.medicationsService.getAllMedications();
    }

    @Get(':id')
    getMedication(id: number) {
        return this.medicationsService.getMedicationById(id);
    }

    @Get('search')
    searchMedications() {
        return 'Search Medications';
    }
}
