var express = require('express');
var mongodb = require('mongodb');
var mongodbclient = mongodb.MongoClient();

let login = express.Router().get("/:email/:password", (req, res) => {

    let email = req.params.email;
    let password =parseInt( req.params.password);

    mongodbclient.connect("mongodb://localhost:27017/participants", (err, db) => {
        if (err) {
            throw err;
        } else {
            console.log("Connection Established...");

            db.collection("userdetails").findOne({"email":email, "password": password}, (err, user) => {
                if (err) {
                    throw err;
                } else {
                    if(user!=null)res.send("Login Successful!");
                    else res.send("Invalid Details!")
                }
            });
        }
        db.close();
    });
});

module.exports = login;