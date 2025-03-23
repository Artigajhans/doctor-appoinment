const multer = require('multer')
const storage = multer.diskStorage({
    filename: (req, file, cb) => { cb(null, file.originalname) }//file mdhe object yetoy file frontend
})
// const storage = multer.memoryStorage()
exports.upload = multer({ storage }).single("profileImage")   