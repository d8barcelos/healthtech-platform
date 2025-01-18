import { Injectable } from '@nestjs/common';

@Injectable()
export class PrescriptionsService {
    getAllPrescriptions() {
        return 'All Prescriptions';
    }

    getPrescription() {
        return 'A Prescription';
    }

    searchPrescriptions() {
        return 'Search Prescriptions';
    }
}
