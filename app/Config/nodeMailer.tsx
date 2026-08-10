import nodemailer from "nodemailer";

const email = process.env.EMAIL_USER as string;
const pass = process.env.EMAIL_PASS as string;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: `"DataSoft Website" <${email}>`,
  to: email,
};
