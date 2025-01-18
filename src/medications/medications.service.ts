import { Injectable } from '@nestjs/common';
import medications from './data/medications';

@Injectable()
export class MedicationsService {
    getAllMedications() {
        return medications;
    }

    getMedicationById(id: number) {
        return medications.find(medication => medication.id === id);
    }    

    searchMedications() {
        return 'Search Medications';
    }
}
