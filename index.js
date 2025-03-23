const express = require("express")
const mongoose = require('mongoose')
require("dotenv").config()
const cors = require('cors')
const cookieParser = require("cookie-parser")
const { adminProtected, patientProtected, doctorProtected } = require("./middleware/protected.middleware")


const app = express()
app.use(express.json())

app.use(cookieParser())

app.use(cors({
    origin: true,
    credentials: true
}))
app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/admin", adminProtected, require("./routes/admin.routes"))
app.use("/api/patient", patientProtected, require("./routes/patients.routes"))
app.use("/api/doctor", doctorProtected, require("./routes/doctor.routes"))
app.use("/api/public", require("./routes/public.route"))
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "server error" })
})


mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(process.env.PORT, console.log("server ruuning"))

})
