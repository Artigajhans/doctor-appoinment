const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

exports.adminProtected = asyncHandler(async (req, res, next) => {
    const token = req.cookies["doctor-admin"]
    if (!token) {
        return res.status(401).json({ message: "no cookie found" })
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: "invalid token" })
        }
        req.user = decode._id
        next()
    })
})
exports.patientProtected = asyncHandler(async (req, res, next) => {
    const token = req.cookies["patient-app"]
    if (!token) {
        return res.status(401).json({ message: "no cookie found" })
    }
    //                                               👇 second arrgument mdhe { _id: result._id} je login kartna patvto
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: "invalid token" })
        }
        req.patient = decode._id
        next()
    })
})
exports.doctorProtected = asyncHandler(async (req, res, next) => {
    const token = req.cookies["doctor-dp"]
    if (!token) {
        return res.status(401).json({ message: "no cookie found" })
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: "invalid token" })
        }
        req.loggedInDoctor = decode._id
        next()
    })
})