import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { PrescriptionsService } from './prescriptions.service';
import { Prescription } from './prescriptions.entity';
import { CreatePrescriptionDto } from './create-prescription-dto';
import { Roles } from 'src/auth/guard/roles.decorator';

@Controller('prescriptions')
export class PrescriptionsController {
    constructor(private readonly prescriptionsService: PrescriptionsService) {}

    @Get()
    getAllPrescriptions() {
        return this.prescriptionsService.getAllPrescriptions();
    }

    @Get(':id')
    getPrescription(@Param('id') id: number) {
        return this.prescriptionsService.getPrescriptionById(id);
    }

    @Post()
    @Roles('doctor')
    createPrescription(@Body() createPrescriptionDto: CreatePrescriptionDto) {
        return this.prescriptionsService.createPrescription(createPrescriptionDto);
    }

    @Put(':id')
    @Roles('doctor')
    updatePrescription(@Param('id') id: number, @Body() updatePrescriptionDto: CreatePrescriptionDto) {
        return this.prescriptionsService.updatePrescription(id, updatePrescriptionDto);
    }

    @Delete(':id')
    @Roles('doctor')
    deletePrescription(@Param('id') id: number) {
        return this.prescriptionsService.deletePrescription(id);
    }

    @Get('search')
    searchPrescriptions(@Query() query: Partial<Prescription>) {
        return this.prescriptionsService.searchPrescriptions(query);
    }
}