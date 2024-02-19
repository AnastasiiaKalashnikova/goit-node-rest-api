const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "nastasya.kalashnik@meta.ua",
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: "nastasya.kalashnik@meta.ua",
  };
  await transporter.sendMail(email);
};

module.exports = sendEmail;
