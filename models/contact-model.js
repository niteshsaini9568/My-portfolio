const mongoose = require("mongoose");
const Schema = mongoose.Schema;

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Portfolio');
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
    location: String,
    subject: String,
    message: String
});

const portfolioModel = mongoose.model("portfolio", portfolioSchema);
module.exports = { portfolioModel };