const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors({
    origin: 'https://hari-krishnan.onrender.com',
    methods: ['POST', 'GET'],
    credentials: true,
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Portfolio backend is running successfully');
});

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [process.env.YOUR_EMAIL],
        replyTo: email,
        subject: `New Message from ${name} via Portfolio`,
        html: `<h3>New Contact Form Submission</h3>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`,
    });

    if (error) return res.status(500).json({ error: 'Failed to send message.' });

    res.status(200).json({ success: 'Message sent successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
