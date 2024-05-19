const express = require("express");
const router = express.Router();
const path = require('path');
const Portfolio = require("../controller/contact-controller.js");

router.route("/")
    .get((req, res) => {
        res.render("./main/index");
    });

router.route("/resume")
    .get((req, res) => {
        const filePath = path.join(__dirname, '..', 'public', 'assets', 'resume.pdf');
        res.sendFile(filePath);
    });

router.route("/contact")
    .post(Portfolio);

module.exports = router;