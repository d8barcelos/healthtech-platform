import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrescriptionsService } from './prescriptions.service';
import { PrescriptionsController } from './prescriptions.controller';
import { Prescription } from './prescriptions.entity';
import { AuthModule } from 'src/auth/auth.module';
import { RolesGuard } from 'src/auth/guard/roles.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([Prescription]),
    AuthModule,
  ],
  providers: [PrescriptionsService, RolesGuard],
  controllers: [PrescriptionsController],
})
export class PrescriptionsModule {}