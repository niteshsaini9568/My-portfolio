const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('dotenv').config()


async function main() {
    await mongoose.connect(process.env.db);
}

main()
    .then(() => { console.log("Connected Successfully"); })
    .catch((err) => { console.error(err); });

const portfolioSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: String,
    subject: String,
    message: String
});

const portfolioModel = mongoose.model("portfolio", portfolioSchema);
module.exports = { portfolioModel };
