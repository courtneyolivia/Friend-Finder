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

       var chosen = req.params.friends;
  if (chosen) {
    console.log(chosen);
    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
    return res.json(false);
  }
  return res.json(friends); 
    });
};