const mongoose = require("mongoose")

const hospitalSchema = mongoose.Schema({},{timestamps:true})

export const Hospital = mongoose.model("Hospital", hospitalSchema)