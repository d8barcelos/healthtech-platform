import { Injectable } from '@nestjs/common';
import medications, { Medication } from './data/medications';

@Injectable()
export class MedicationsService {
    getAllMedications() {
        return medications;
    }

    getMedicationById(id: number) {
        return medications.find(medication => medication.id === id);
    }    

    filterMedications(criteria: Partial<Medication>): Medication[] {
        return medications.filter(medication => {
            return Object.keys(criteria).every(key => {
                return criteria[key as keyof Medication] === medication[key as keyof Medication];
            });
        });
    }
}
