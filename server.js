const express = require('express');
const path = require('path');  
const bodyParser = require('body-parser');
const ejsMate = require("ejs-mate");
const mainrouter = require("./routes/mainroute")
const app = express();

app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());

let port = 8080 ; 

app.use("/", mainrouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});