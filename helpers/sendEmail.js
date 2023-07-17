const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const sendEmail = async (data) => {
  console.log();
  try {
    const nodemailerConfig = {
      host: "smtp.meta.ua",
      port: 465,
      secure: true,
      auth: {
        user: "andriisafonov@meta.ua",
        pass: META_PASSWORD,
      },
    };

    const transport = nodemailer.createTransport(nodemailerConfig);

    const email = await transport.sendMail({
      ...data,
      from: "andriisafonov@meta.ua",
    });

    return email;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendEmail;
