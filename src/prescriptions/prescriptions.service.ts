import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prescription } from './prescriptions.entity';
import { CreatePrescriptionDto } from './create-prescription-dto';

@Injectable()
export class PrescriptionsService {
    constructor(
        @InjectRepository(Prescription)
        private readonly prescriptionRepository: Repository<Prescription>,
    ) {}

    getAllPrescriptions(): Promise<Prescription[]> {
        return this.prescriptionRepository.find();
    }

    getPrescriptionById(id: number): Promise<Prescription> {
        return this.prescriptionRepository.findOne({ where: { id } });
    }

    createPrescription(createPrescriptionDto: CreatePrescriptionDto): Promise<Prescription> {
        const prescription = this.prescriptionRepository.create(createPrescriptionDto);
        return this.prescriptionRepository.save(prescription);
    }

    updatePrescription(id: number, updatePrescriptionDto: CreatePrescriptionDto): Promise<Prescription> {
        return this.prescriptionRepository.save({ ...updatePrescriptionDto, id });
    }

    deletePrescription(id: number): Promise<void> {
        return this.prescriptionRepository.delete(id).then(() => {});
    }

    searchPrescriptions(query: Partial<Prescription>): Promise<Prescription[]> {
        return this.prescriptionRepository.find({ where: query });
    }
}