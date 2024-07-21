const mongoose = require("mongoose")

const doctorSchema = mongoose.Schema({},{timestamps:true})

export const Doctor = mongoose.model("Doctor", doctorSchema)