const express = require('express');
const path = require('path');  
const bodyParser = require('body-parser');
const mainrouter = require("./routes/mainroute");
const app = express();

const allowCors = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', 'https://portfolio-frontend-peach-one.vercel.app'); // Replace with your frontend URL
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    next(); 
};

app.use(allowCors);

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", mainrouter);

let port = 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
