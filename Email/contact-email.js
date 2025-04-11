const nodemailer = require('nodemailer');

module.exports.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

module.exports.mailoptionsForMe = (req, res) => {
    return {
        from: {
            name: "Nitesh Saini",
            address: 'nitesh.saini.dev@gmail.com'
        },
        to: 'nitesh.saini.dev@gmail.com',
        subject: "New Contact Form Submission",
        text: `You have received a new contact form submission from your portfolio website.

        Name: ${req.body.name}
        Email: ${req.body.email}
        Location: ${req.body.location}
        Subject: ${req.body.subject}
        Message: ${req.body.message}`,

        html: `<p>You have received a new contact form submission from your portfolio website.</p>
                <p><strong>Name:</strong> ${req.body.name}</p>
                <p><strong>Email:</strong> ${req.body.email}</p>
                <p><strong>Location:</strong> ${req.body.location}</p>
                <p><strong>Subject:</strong> ${req.body.subject}</p>
                <p><strong>Message:</strong> ${req.body.message}</p>`
    };
};

module.exports.mailoptionsForClient = (req, res) => {
    return {
        from: {
            name: "Nitesh Saini",
            address: 'nitesh.saini.dev@gmail.com'
        },
        to: req.body.email,
        subject: "Thank You for Reaching Out!",
        text: `Hello ${req.body.name},
        Thank you for reaching out to me through my portfolio website. I have received your message and will get back to you as soon as possible.
        Here is a copy of your message:
        Subject: ${req.body.subject}
        Message: ${req.body.message}
        Best regards,
        Nitesh Saini`,

        html: `<p>Hello ${req.body.name},</p>
               <p>Thank you for reaching out to me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
               <p>Here is a copy of your message:</p>
               <p><strong>Subject:</strong> ${req.body.subject}</p>
               <p><strong>Message:</strong> ${req.body.message}</p>
               <p>Best regards,<br>Nitesh Saini</p>`
    };
};
