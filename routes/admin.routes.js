const { showDoctorToAdmin, showPatientToAdmin, appointmnetsShowToAdmin, adminBlockUnblockPatient, adminBlockUnblockDoctor } = require('../controller/admin.controller')
const router = require("express").Router()

router
    .get("/doctors-showA", showDoctorToAdmin)
    .get("/patients-ShowA", showPatientToAdmin)
    .get("/appointments-ShowA", appointmnetsShowToAdmin)

    .put("/admin-doctor-blockUnblock/:aid", adminBlockUnblockDoctor)
    .put("/admin-patient-blockUnblock/:pid", adminBlockUnblockPatient)
//  all patients for admin


module.exports = router