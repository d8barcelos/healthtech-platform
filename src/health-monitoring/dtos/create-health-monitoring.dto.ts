import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHealthMonitoringDto {
    @IsNotEmpty()
    @IsNumber()
    heartRate: number;

    @IsNotEmpty()
    @IsString()
    bloodPressure: string;

    @IsNotEmpty()
    @IsNumber()
    temperature: number;

    @IsNotEmpty()
    @IsNumber()
    oxygenSaturation: number;
}