const asyncHandler = require("express-async-handler")
const Doctor = require("../model/Doctor")

exports.getDoctorsPublic = asyncHandler(async (req, res) => {
    const result = await Doctor.find({}).select("-password")
    res.json({ message: "Doctor fetch success", result })


})