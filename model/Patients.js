const mongoose = require("mongoose")

const patientsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", " not to prefer"], default: " not to prefer" },
    isActive: { type: Boolean, default: true, },
    reviews: [
        {
            doctorId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Doctor'
            },
            comment: String,
            rating: Number,
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
}, { timestamps: true })


module.exports = mongoose.model("Patients", patientsSchema)