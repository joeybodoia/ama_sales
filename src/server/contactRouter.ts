import nodemailer from "nodemailer";
import express from "express";

const router = express.Router();

const transporter = nodemailer.createTransporter({
  service: "gmail",
  auth: { 
    user: process.env.SMTP_USER, 
    pass: process.env.SMTP_PASS 
  },
});

router.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }
    
    await transporter.sendMail({
      to: "jbodoia@gmail.com",
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      replyTo: email,
      subject: `New inquiry from: ${name}`,
      text: message,
    });
    
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to send message." });
  }
});

export default router;