var express = require('express');
var mongodb = require('mongodb');
var mongodbclient = mongodb.MongoClient();

let fetch = express.Router().get("/", (req, res) => {
    mongodbclient.connect("mongodb://localhost:27017/participants", (err, db) => {
        if (err) {
            throw err;
        } else {
            console.log("Connection Established...");

            db.collection("userdetails").find({}).toArray((err, employees) => {
                if (err) {
                    throw err;
                } else {
                    res.send(employees);
                }
            });
        }
        db.close();
    });
});

module.exports = fetch;