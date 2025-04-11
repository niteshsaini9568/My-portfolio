const express = require('express');
const path = require('path');  
const bodyParser = require('body-parser');
const mainrouter = require("./routes/mainroute")
const app = express();
const cors = require('cors');

const corsOptions = {
    origin: 'https://portfolio-frontend-peach-one.vercel.app/',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));


let port = 8080 ;

app.use("/", mainrouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});