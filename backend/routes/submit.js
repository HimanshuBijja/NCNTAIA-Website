const express = require("express");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");
const Submission = require("../models/Submission");
require("dotenv").config();

const router = express.Router();

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (_, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const uid = "NCNTAIA-" + uuidv4().slice(0, 8).toUpperCase();
    const {
      name,
      email,
      phone,
      affiliation,
      department,
      location,
      paperTitle,
      keywords,
      abstractText,
      domain,
    } = req.body;

    const newEntry = new Submission({
      uid,
      name,
      email,
      phone,
      affiliation,
      department,
      location,
      paperTitle,
      keywords: keywords.split(",").map(k => k.trim()),
      abstractText,
      domain,
      filePath: req.file?.path,
    });

    await newEntry.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Abstract Submission Acknowledgment - ${uid}`,
      text: `Dear ${name},\n\nThank you for submitting your abstract.\n\nSubmission ID: ${uid}\nTitle: ${paperTitle}\n\nWe’ll review your abstract and update you shortly.\n\nRegards,\nNCNTAIA Team`,
    });

    res.status(200).json({ message: "Submitted successfully", uid });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Submission failed" });
  }
});

module.exports = router;

