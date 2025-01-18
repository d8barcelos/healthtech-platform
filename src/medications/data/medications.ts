export interface Medication {
    id: number;
    name: string;
    dosage: string;
    form: string;
    manufacturer: string;
    sideEffects: string[];
    contraindications: string[];
}

const medications: Medication[] = [
    {
        id: 1,
        name: "Paracetamol",
        dosage: "500mg",
        form: "Tablet",
        manufacturer: "Pharma Inc.",
        sideEffects: ["Nausea", "Rash"],
        contraindications: ["Liver disease"]
    },
    {
        id: 2,
        name: "Ibuprofen",
        dosage: "200mg",
        form: "Tablet",
        manufacturer: "HealthCorp",
        sideEffects: ["Stomach pain", "Dizziness"],
        contraindications: ["Ulcer", "Kidney disease"]
    },
    {
        id: 3,
        name: "Amoxicillin",
        dosage: "250mg",
        form: "Capsule",
        manufacturer: "MedLife",
        sideEffects: ["Diarrhea", "Allergic reaction"],
        contraindications: ["Penicillin allergy"]
    },
    {
        id: 4,
        name: "Metformin",
        dosage: "500mg",
        form: "Tablet",
        manufacturer: "DiabetesCare",
        sideEffects: ["Nausea", "Vomiting"],
        contraindications: ["Kidney disease", "Liver disease"]
    },
    {
        id: 5,
        name: "Amlodipine",
        dosage: "5mg",
        form: "Tablet",
        manufacturer: "CardioPharma",
        sideEffects: ["Swelling", "Fatigue"],
        contraindications: ["Severe liver disease"]
    },
    {
        id: 6,
        name: "Simvastatin",
        dosage: "20mg",
        form: "Tablet",
        manufacturer: "CholesterolCare",
        sideEffects: ["Muscle pain", "Headache"],
        contraindications: ["Liver disease", "Pregnancy"]
    },
    {
        id: 7,
        name: "Omeprazole",
        dosage: "20mg",
        form: "Capsule",
        manufacturer: "GastroHealth",
        sideEffects: ["Headache", "Diarrhea"],
        contraindications: ["Severe liver disease"]
    },
    {
        id: 8,
        name: "Losartan",
        dosage: "50mg",
        form: "Tablet",
        manufacturer: "HeartCare",
        sideEffects: ["Dizziness", "Back pain"],
        contraindications: ["Pregnancy"]
    },
    {
        id: 9,
        name: "Levothyroxine",
        dosage: "100mcg",
        form: "Tablet",
        manufacturer: "ThyroidHealth",
        sideEffects: ["Hair loss", "Increased heart rate"],
        contraindications: ["Thyrotoxicosis", "Adrenal insufficiency"]
    },
    {
        id: 10,
        name: "Atorvastatin",
        dosage: "10mg",
        form: "Tablet",
        manufacturer: "LipidControl",
        sideEffects: ["Muscle pain", "Diarrhea"],
        contraindications: ["Liver disease", "Pregnancy"]
    },
    {
        id: 11,
        name: "Captopril",
        dosage: "25mg",
        form: "Tablet",
        manufacturer: "HeartShield",
        sideEffects: ["Dry cough", "Dizziness"],
        contraindications: ["Pregnancy", "Angioedema"]
    },
    {
        id: 12,
        name: "Hydrochlorothiazide",
        dosage: "25mg",
        form: "Tablet",
        manufacturer: "DiureticPlus",
        sideEffects: ["Low blood pressure", "Dehydration"],
        contraindications: ["Anuria", "Electrolyte imbalance"]
    },
    {
        id: 13,
        name: "Lisinopril",
        dosage: "10mg",
        form: "Tablet",
        manufacturer: "CardioCare",
        sideEffects: ["Cough", "High potassium levels"],
        contraindications: ["Angioedema", "Pregnancy"]
    },
    {
        id: 14,
        name: "Clopidogrel",
        dosage: "75mg",
        form: "Tablet",
        manufacturer: "BloodFlow Inc.",
        sideEffects: ["Bleeding", "Bruising"],
        contraindications: ["Active bleeding", "Peptic ulcer"]
    },
    {
        id: 15,
        name: "Warfarin",
        dosage: "5mg",
        form: "Tablet",
        manufacturer: "AntiCoag Pharma",
        sideEffects: ["Bleeding", "Hair loss"],
        contraindications: ["Pregnancy", "Uncontrolled hypertension"]
    },
    {
        id: 16,
        name: "Spironolactone",
        dosage: "25mg",
        form: "Tablet",
        manufacturer: "RenalHealth",
        sideEffects: ["High potassium", "Breast tenderness"],
        contraindications: ["Kidney failure", "High potassium levels"]
    },
    {
        id: 17,
        name: "Alprazolam",
        dosage: "0.5mg",
        form: "Tablet",
        manufacturer: "CalmMed",
        sideEffects: ["Drowsiness", "Dependence"],
        contraindications: ["Severe respiratory depression", "Acute narrow-angle glaucoma"]
    },
    {
        id: 18,
        name: "Ranitidine",
        dosage: "150mg",
        form: "Tablet",
        manufacturer: "DigestCare",
        sideEffects: ["Constipation", "Headache"],
        contraindications: ["Severe liver impairment"]
    },
    {
        id: 19,
        name: "Fluoxetine",
        dosage: "20mg",
        form: "Capsule",
        manufacturer: "MoodLift",
        sideEffects: ["Nausea", "Insomnia"],
        contraindications: ["MAOI therapy", "Severe liver disease"]
    },
    {
        id: 20,
        name: "Gabapentin",
        dosage: "300mg",
        form: "Capsule",
        manufacturer: "NeuroCare",
        sideEffects: ["Drowsiness", "Dizziness"],
        contraindications: ["Hypersensitivity to gabapentin"]
    }
];

export default medications;
