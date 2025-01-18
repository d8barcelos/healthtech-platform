import { Module } from '@nestjs/common';
import { MedicationsController } from './medications.controller';
import { MedicationsService } from './medications.service';
import { AuthModule } from '../auth/auth.module';
import { RolesGuard } from '../auth/guard/roles.guard';

@Module({
  imports: [AuthModule],
  controllers: [MedicationsController],
  providers: [MedicationsService, RolesGuard],
})
export class MedicationsModule {}
