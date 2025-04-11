const express = require("express");
const router = express.Router();
const path = require('path');
const Portfolio = require("../controller/contact-controller.js");

router.route("/contact")
    .post(Portfolio);

module.exports = router;