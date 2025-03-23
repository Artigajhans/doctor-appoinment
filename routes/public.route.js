const { getDoctorsPublic } = require("../controller/public.controller")

const router = require("express").Router()
router

    .get("/public-getAllDoctors", getDoctorsPublic)


module.exports = router