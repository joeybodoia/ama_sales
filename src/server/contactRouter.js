import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

router.post("/api/contact", async (req, res) => {
  try {
    const { name, email, vendors, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Format the email body with vendor information
    let emailBody = message;
    if (vendors && vendors.length > 0) {
      emailBody = `Interested Vendors: ${vendors.join(', ')}\n\n${message}`;
    }

    await transporter.sendMail({
      to: "jbodoia@gmail.com",
      from: `"AMA Sales Co Contact Form" <${process.env.SMTP_USER}>`,
      replyTo: email,
      subject: `New inquiry from: ${name}`.slice(0, 120),
      text: emailBody,
      // html: `<p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to send message." });
  }
});

export default router;