const { portfolioModel } = require("../models/contact-model.js");
const { mailoptionsForClient, mailoptionsForMe, transporter } = require("../Email/contact-email.js");

let Portfolio = (req, res) => {
    let { name, email, location, subject, message } = req.body;
    let newPortfolio = new portfolioModel({
        name: name,
        email: email,
        location: location,
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
            req.body = {};
            res.redirect('/');
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error submitting form' });
        });
};

module.exports = Portfolio;
