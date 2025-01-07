require('dotenv').config();
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.post('/contact', async (req, res) => {
    const { email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.SMTP_EMAIL,
        subject: subject,
        html: `<p><strong>From:</strong> ${email}</p>
               <p><strong>Subject:</strong> ${subject}</p>
               <p><strong>Message:</strong><br>${message}</p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200);
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Failed to send email.");
    }
});

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`express is running on port ${PORT}`)
});