// Load dependencies
var friends = require("../data/friends.js");

// Eastablish routes
module.exports = function (app) {

    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST requests
    app.post("/api/friends", function (req, res) {
        res.json(friends);
    });
};