import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './appointment.entity';
import { CreateAppointmentDto } from './create-appointment.dto';
import { Roles } from 'src/auth/guard/roles.decorator';
import { RolesGuard } from 'src/auth/guard/roles.guard';

@Controller('appointments')
@UseGuards(RolesGuard)
export class AppointmentsController {
    constructor(private readonly appointmentsService: AppointmentsService) {}

    @Get()
    getAllAppointments() {
        return this.appointmentsService.getAllAppointments();
    }

    @Get(':id')
    getAppointment(@Param('id') id: number) {
        return this.appointmentsService.getAppointmentById(id);
    }

    @Post()
    @Roles('doctor')
    createAppointment(@Body() createAppointmentDto: CreateAppointmentDto) {
        return this.appointmentsService.createAppointment(createAppointmentDto);
    }

    @Put(':id')
    @Roles('doctor')
    updateAppointment(@Param('id') id: number, @Body() updateAppointmentDto: CreateAppointmentDto) {
        return this.appointmentsService.updateAppointment(id, updateAppointmentDto);
    }

    @Delete(':id')
    @Roles('doctor')
    deleteAppointment(@Param('id') id: number) {
        return this.appointmentsService.deleteAppointment(id);
    }
}