import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './appointment.entity';
import { CreateAppointmentDto } from './create-appointment.dto';

@Controller('appointments')
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
    createAppointment(@Body() createAppointmentDto: CreateAppointmentDto) {
        return this.appointmentsService.createAppointment(createAppointmentDto);
    }

    @Put(':id')
    updateAppointment(@Param('id') id: number, @Body() updateAppointmentDto: CreateAppointmentDto) {
        return this.appointmentsService.updateAppointment(id, updateAppointmentDto);
    }

    @Delete(':id')
    deleteAppointment(@Param('id') id: number) {
        return this.appointmentsService.deleteAppointment(id);
    }
}