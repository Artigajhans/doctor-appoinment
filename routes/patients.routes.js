const { BookAppointment, getDoctors, cancelAppointment, getPatientAppointments, fetchDoctorsById, getPatientHistory } = require("../controller/patients.controller");

const router = require("express").Router()

router

    //patients
    .get("/getAllDoctors-patient", getDoctors)
    .get("/patient-doctorDetails/:id", fetchDoctorsById)
    .post('/patient-bookappointment', BookAppointment)
    .put("/patient-cancelAppoint/:aid", cancelAppointment)
    .get("/patient-getAppoin", getPatientAppointments)
    .get("/patient-history", getPatientHistory)
// .get("/patient-doctorDetails/:doctorId", getDoctorstDetails)




module.exports = router