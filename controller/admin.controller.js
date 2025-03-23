const asyncHandler = require('express-async-handler')
const Doctor = require('../model/Doctor')
const Patients = require('../model/Patients')
const Appointment = require('../model/Appointment')


// exports.registerDoctor = asyncHandler(async (req, res) => {
//     upload(req, res, async (err) => {
//         if (err) {
//             console.log(err)
//             return res.status(400).json({ message: "multer error" })
//         }
//         const { name, email, specialization, phone, address, schedule } = req.body
//         const { isError, error } = checkEmpty({ name, email, specialization, phone, address, schedule })
//         if (isError) {
//             return res.status(400).json({ message: "all fileds required", error })
//         }
//         const result = await Doctor.findOne({ email })
//         if (result) {
//             return res.status(409).json({ message: "email already registered" })
//         }
//         const password = name.slice(0, 2) + email.slice(0, 2)
//         const hash = await bcrypt.hash(password, 10)
//         // if (!req.files || req.files.length === 0) {
//         //     return res.status(400).json({ message: "image is require" })
//         // }

//         let image = ""
//         if (req.file) {
//             const { secure_url } = await cloud.uploader.upload(req.file.path)
//             image = secure_url
//         }

//         const x = JSON.parse(req.body.schedule);

//         await Doctor.create({ ...req.body, schedule: x, profileImage: image, password: hash })
//         res.json({ message: "rider register success" })
//     })
// })
exports.showDoctorToAdmin = asyncHandler(async (req, res) => {
    const result = await Doctor.find({}).select("-password")
    res.json({ message: " doctor fetch success", result })
})
exports.showPatientToAdmin = asyncHandler(async (req, res) => {
    const result = await Patients.find().select('-password -__v -createdAt -updatedAt')
    res.json({ message: " Patient fetch success", result })
})
exports.appointmnetsShowToAdmin = asyncHandler(async (req, res) => {
    const result = await Appointment.find()
        .populate('patientId', 'name email address mobile')
        .populate('doctorId', 'name email address mobile specialization')
    console.log(result);
    return res.json({ message: "appointment get success", result })
})
exports.adminBlockUnblockDoctor = asyncHandler(async (req, res) => {
    const { aid } = req.params
    await Doctor.findByIdAndUpdate(aid, { isActive: req.body.isActive }, { new: true })
    res.json({ message: "Account block success" })
})

exports.adminBlockUnblockPatient = asyncHandler(async (req, res) => {
    const { pid } = req.params
    await Patients.findByIdAndUpdate(pid, { isActive: req.body.isActive }, { new: true })
    res.json({ message: "Account block success" })
})