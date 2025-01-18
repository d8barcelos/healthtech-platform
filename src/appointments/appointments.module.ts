import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './appointment.entity';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([Appointment]), AuthModule],
    controllers: [AppointmentsController],
    providers: [AppointmentsService, RolesGuard],
})
export class AppointmentsModule {}
