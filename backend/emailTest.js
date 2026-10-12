const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendTestEmail() {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Fitness Hub OTP Test",
      text: "Fitness Hub email system is working! 🚀",
    });

    console.log("Email sent successfully ✅");
    console.log("Message ID:", info.messageId);
  } catch (error) {
    console.log("Email sending failed ❌");
    console.log(error.message);
  }
}

sendTestEmail();