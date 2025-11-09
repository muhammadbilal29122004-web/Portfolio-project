const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'muhammadadbilal29122004@gmail.com',
        pass: process.env.EMAIL_PASS || '' // App password should be set in .env
    }
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validate input
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required' 
            });
        }

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER || 'muhammadadbilal29122004@gmail.com',
            to: 'muhammadadbilal29122004@gmail.com',
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.json({ 
            success: true, 
            message: 'Message sent successfully!' 
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send message. Please try again.' 
        });
    }
});

// WhatsApp message endpoint (optional - for backend logging)
app.post('/api/whatsapp', (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Log the message (you can extend this to send via WhatsApp Business API)
        console.log('WhatsApp Message Request:', {
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString()
        });

        // Format message for WhatsApp
        const whatsappMessage = `Hello! I'm ${name}.\n\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
        const whatsappNumber = '923113254286';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        res.json({ 
            success: true, 
            message: 'WhatsApp URL generated',
            url: whatsappURL
        });

    } catch (error) {
        console.error('Error processing WhatsApp request:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to process request' 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📧 Email configured: ${process.env.EMAIL_USER || 'muhammadadbilal29122004@gmail.com'}`);
    console.log(`📱 WhatsApp: +92 311 3254286`);
});

