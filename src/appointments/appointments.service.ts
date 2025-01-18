import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './appointment.entity';
import { CreateAppointmentDto } from './create-appointment.dto';

@Injectable()
export class AppointmentsService {
    constructor(
        @InjectRepository(Appointment)
        private readonly appointmentRepository: Repository<Appointment>,
    ) {}

    async getAllAppointments(): Promise<Appointment[]> {
        return this.appointmentRepository.find();
    }

    async getAppointmentById(id: number): Promise<Appointment> {
        return this.appointmentRepository.findOne({ where: { id } });
    }

    async createAppointment(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
        const appointment = this.appointmentRepository.create(createAppointmentDto);
        return this.appointmentRepository.save(appointment);
    }

    async updateAppointment(id: number, updateAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
        await this.appointmentRepository.update(id, updateAppointmentDto);
        return this.getAppointmentById(id);
    }

    async deleteAppointment(id: number): Promise<void> {
        await this.appointmentRepository.delete(id);
    }
}