// Loading dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Initialize app and establish port
var app = express();
var PORT = process.env.PORT || 8889;

// Sets up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:''}));

// Import routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Listening on port
app.listen(PORT,function() {
    console.log("App listening on PORT " + PORT);
}
