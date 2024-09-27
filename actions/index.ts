"use server";
import nodemailer from "nodemailer";

export const sendMessage = async (formData: FormData) => {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const location = formData.get("location");

    if (!name || !email || !message) {
      return {
        success: false,
        message: "All fields are required",
      };
    }
    const loc = location || "Anonymous";
    const transporter = await nodemailer.createTransport({
      host: process.env.SMTP,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    await transporter.sendMail({
      from: '"Your profile" <info@netbritz.com>', // sender address
      to: "herberthtk100@gmail.com", // list of receivers
      subject: `Inquiry from your profile`, // Subject line
      // text: "Hello world?",
      html: `<p><b>Hello Herbert</b>,</p>${name} with email ${email} from ${loc} has sent ${message}</p>`,
    });

    return {
      success: true,
      message: "Email sent",
    };
  } catch (error) {
    throw new Error(error as string);
  }
};
