const asyncHandler = require('express-async-handler')
const Appointment = require("../model/Appointment");
const Doctor = require("../model/Doctor");
const Patients = require("../model/Patients");

// exports.bookAppointmentPatient = asyncHandler(async (req, res) => {
//     const { doctorId, date, timeSlot, } = req.body;
//     const patientId = req.patient;

//     const doctor = await Doctor.findById(doctorId).select(-password)
//     if (!doctor) {
//         return res.status(404).json({ message: "Doctor not found" })
//     }
//     // let Soldbook
//     const patient = await Patients.findById(patientId);
//     if (!patient) {
//         return res.status(404).json({ message: "patient not found" })
//     }
//     const result = await Appointment.create({ doctorId, patientId, date, timeSlot })
//     res.json({ message: " appoinment book success", result })
// })
exports.getDoctors = asyncHandler(async (req, res) => {
    const result = await Doctor.find({}).select("-password")
    res.json({ message: "Doctor fetch success", result })
})


exports.BookAppointment = asyncHandler(async (req, res) => {
    const { doctorId, date, timeSlot } = req.body;
    const patientId = req.patient;

    const existingAppointment = await Appointment.findOne({ doctorId, date, timeSlot });

    if (existingAppointment) {
        return res.status(400).json({ message: "Slot not available. Please choose another time." });
    }

    const newAppointment = await Appointment.create({ doctorId, patientId, date, timeSlot });

    return res.status(201).json({ message: "Appointment booked successfully", appointment: newAppointment });
})
exports.cancelAppointment = asyncHandler(async (req, res) => {
    console.log(req.params);
    const result = await Appointment.findByIdAndDelete(req.params.aid, { status: 'Cancelled' }, { new: true });
    return res.json({ message: "Appointment cancelled successfully", result });
});

exports.getPatientAppointments = asyncHandler(async (req, res) => {
    const p_Id = req.patient
    console.log(req.patient);

    //                                                      middleware 
    const result = await Appointment.find({ patientId: req.patient })
        .populate('doctorId', 'name email address status mobile specialization')
    console.log("reee", result);

    return res.json({ message: "Appointments fetched success", result })
})

// exports.getDoctorstDetails = async (req, res) => {
//     const pId = req.params.productId
//     if (!pId) {
//         return res.status(400).json({ message: "id not found" })
//     }
//     const result = await Doctor.findById(req.params.doctorId).populate("-password")
//     res.json({ meassage: "get doctor detail success", result })

// }
exports.fetchDoctorsById = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const result = await Doctor.findById(id).select("-password")

        if (!result) {
            return res.status(404).json({ message: "No doctor found" });
        }
        res.json({ message: "Doctor fetch success", result })
    } catch (error) {
        console.log(error)
        return res.json({ succes: false, message: error.message })
    }

})