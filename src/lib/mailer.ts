import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail', // Or use host/port for generic SMTP
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendNotificationEmail = async (subject: string, html: string) => {
    const recipient = process.env.EMAIL_TO || 'neumog.tech@gmail.com';

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: recipient, // Internal notification address
        subject: `[Neumog Form] ${subject}`,
        html,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};
