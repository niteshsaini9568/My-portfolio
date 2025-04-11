const { portfolioModel } = require("../models/contact-model.js");
const { mailoptionsForClient, mailoptionsForMe, transporter } = require("../Email/contact-email.js");

let Portfolio = (req, res) => {
    let { name, email, subject, message } = req.body;
    let newPortfolio = new portfolioModel({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });

    newPortfolio.save()
        .then(() => {
            const clientMailOptions = mailoptionsForClient(req, res);
            const myMailOptions = mailoptionsForMe(req, res);

            const sendMail = (mailOptions) => {
                return transporter.sendMail(mailOptions)
                    .then(() => {
                        console.log("Email sent successfully");
                    })
                    .catch((error) => {
                        console.error("Error sending email:", error);
                    });
            };

            return Promise.all([
                sendMail(clientMailOptions),
                sendMail(myMailOptions)
            ]);
        })
        .then(() => {
            return res.status(200).json({
                message: "Form submitted successfully",
                success: true,
            });
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error submitting form' });
        });
};

module.exports = Portfolio;
