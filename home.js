var express = require('express');

let home = express.Router().get("/", function(req, res) {
    res.send("<center><h1>Welcome to Home Page</h1></center>")
});

module.exports = home;

