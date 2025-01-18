import { Controller, Get, Query, Param, UseGuards } from '@nestjs/common';
import { MedicationsService } from './medications.service';
import { Medication } from './data/medications';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Roles } from '../auth/guard/roles.decorator';

@Controller('medications')
@UseGuards(RolesGuard)
export class MedicationsController {
    constructor(private readonly medicationsService: MedicationsService) {}

    @Get()
    @Roles('doctor')
    getAllMedications(@Query() query: Partial<Medication>) {
        if (Object.keys(query).length) {
            return this.medicationsService.filterMedications(query);
        }
        return this.medicationsService.getAllMedications();
    }

    @Get(':id')
    @Roles('doctor')
    getMedication(@Param('id') id: number) {
        return this.medicationsService.getMedicationById(id);
    }

    @Get('search')
    @Roles('doctor')
    searchMedications(@Query('name') name: string) {
        return this.medicationsService.searchMedicationsByName(name);
    }
}