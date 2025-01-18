import { Controller, Get } from '@nestjs/common';
import { PrescriptionsService } from './prescriptions.service';

@Controller('prescriptions')
export class PrescriptionsController {
    constructor(private readonly prescriptionsService: PrescriptionsService) {}

    @Get()
    getAllPrescriptions() {
        return this.prescriptionsService.getAllPrescriptions();
    }

    @Get(':id')
    getPrescription() {
        return this.prescriptionsService.getPrescription();
    }

    @Get('search')
    searchPrescriptions() {
        return this.prescriptionsService.searchPrescriptions();
    }
}
