var express = require("express");
var app = express();
var PORT = 3001;

const path = require("path");

require("./routing/htmlRouting.js")(app);



var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});