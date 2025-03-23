const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    specialization: { type: String, required: true },
    mobile: { type: String, required: true },
    address: { type: String, required: true },
    profileImage: { type: String, default: "" },
    isActive: { type: Boolean, default: false, },
    appointmentBoooked: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',

    },
    schedule: [{
        day: { type: String, required: true, enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true }
    }],
    status: {
        type: String,
        enum: ["Accepted", "Declined"]
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Doctor', doctorSchema);
