const asyncHandler = require('express-async-handler')
const Appointment = require("../model/Appointment")

exports.showAppoinmentToDoctor = asyncHandler(async (req, res) => {
    const result = await Appointment.find({ doctorId: req.loggedInDoctor }).populate('patientId', 'name email address mobile')
    if (!result) {
        return res.status(404).json({ message: "No appointments found for this doctor" });
    }
    res.json({ message: " Appoinment fetch success", result })
})
// exports.AcceptAppointment = asyncHandler(async (req, res) => {

//     const result = await Appointment.findByIdAndUpdate(req.params.id, { status }, { new: true });
//     if (!result) {
//         return res.status(404).json({ message: "Appointment not found" });
//     }
//     return res.json({ message: "Appointment accepted successfully", result });

// });

// exports.DeclineAppointment = asyncHandler(async (req, res) => {
//     const result = await Appointment.findByIdAndUpdate(req.params.id, { status: "Declined" }, { new: true });
//     if (!result) {
//         return res.status(404).json({ message: "Appointment not found" });
//     }
//     return res.json({ message: "Appointment declined success", result });

// });

exports.AcceptAppointment = asyncHandler(async (req, res) => {
    const { status } = req.body;

    if (!["Pending", "Accepted", "Declined"].includes(status)) {
        return res.status(400).json({ message: "Invalid status value" });
    }

    const appointment = await Appointment.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
    );

    if (!appointment) {
        return res.status(404).json({ message: "Appointment not found" });
    }

    res.json({ message: `Appointment ${status.toLowerCase()} successfully`, appointment });
});