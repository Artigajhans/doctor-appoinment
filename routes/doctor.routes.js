const { DeclineAppointment, AcceptAppointment, showAppoinmentToDoctor } = require("../controller/doctor.controller")

const router = require("express").Router()
router
    .get("/doctor-showAppoin", showAppoinmentToDoctor)
    .put("/doctor-acceptAppoint/:aid", AcceptAppointment)
module.exports = router