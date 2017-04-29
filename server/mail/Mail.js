'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport


// setup email data with unicode symbols

// send mail with defined transport object


module.exports = function (mailOptions,res){
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send("error")
            console.log(error)
            return
        }
        res.send("ok")

    });
}