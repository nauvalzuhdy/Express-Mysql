
const nodemailer = require("nodemailer");
require("dotenv").config();
// const path = require("path");


//create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    // host: "smtp.gmail.com",
    // port: 587,
    // secure: false, //true for 465, false for other ports
    auth: {
        user: "nauvalzuhdy123@gmail.com", //sender gmail address
        pass: "eyrv ifnf lwqw cptv", //App password from gmail account
    },
});

const mailOptions = {
    from: {
        name: 'nodemailer',
        address: process.env.USER
    }, //sender address
    to: "zuhdy.course@gmail.com", //list of receivers
    subject: "send email using nodemailer and gmail", //subject line
    text: "Hello guys", //plain text body
    html: "<b>Hello world</b>", //html body
    // attachment : [
    //     {
    //         filename: 'test.pdf',
    //         path: path.join(__dirname, 'test.pdf'),
    //         contentType: 'application/pdf'
    //     },
    //     {
    //         filename: 'sample.jpg',
    //         path: path.join(__dirname, 'sample.jpg'),
    //         contentType: 'image/jpg'
    //     },
    // ]
}

const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email has been sent!')
    } catch (error) {
        console.error(error);
    }
}

sendMail(transporter, mailOptions);