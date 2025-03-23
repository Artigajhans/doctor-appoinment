const { registerAdmin, loginAdmin, verifyAdminOTP, logoutAdmin, registerPatient, loginPatient, logoutPatient, registerDoctor, loginDoctor, logoutDoctor, } = require("../controller/auth.controller")

const router = require("express").Router()

router
    //admin
    // .post("/register-admin", registerAdmin)
    .post("/login-admin", loginAdmin)
    .post("/verify-admin-otp", verifyAdminOTP)
    .post("/logout-admin", logoutAdmin)

    //patients


    .post("/patient-register", registerPatient)
    .post("/patient-login", loginPatient)
    .post("/patient-logout", logoutPatient)

    //Doctor
    .post("/doctor-register", registerDoctor)
    .post("/login-doctor", loginDoctor)
    .post("/logout-doctor", logoutDoctor)

module.exports = router