const mongoose = require("mongoose")

const medicalRecordSchema = mongoose.Schema({},{timestamps:true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)