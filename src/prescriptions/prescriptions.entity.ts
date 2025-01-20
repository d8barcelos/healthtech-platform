import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Prescription {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    patientName: string;

    @Column()
    doctorName: string;

    @Column()
    medication: string;

    @Column()
    dosage: string;

    @Column()
    date: string;
}