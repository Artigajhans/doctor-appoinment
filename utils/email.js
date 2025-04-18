const nodeMalier = require('nodemailer')
exports.sendEmail = ({ message, to, subject }) => new Promise((resolve, reject) => {
    try {
        const mailer = nodeMalier.createTransport({
            service: "gmail",
            auth: {

                user: process.env.FROM_EMAIL,
                pass: process.env.EMAIL_PASS
            }
        })
        mailer.sendMail({ to, subject, html: message }, err => {
            if (err) {
                console.log(err);
                reject("unable to sned email")
            } else {
                console.log("email send")
                resolve("email send success")

            }
        })
    } catch (error) {
        console.log(error)
        reject("nodemailer error")


    }
})