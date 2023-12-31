var express = require('express');
var mongodb = require('mongodb');
var mongodbclient = mongodb.MongoClient();

let register = express.Router().post("/", (req, res) => {

    let employee = {
        "id":req.body.id,
        "username":req.body.username, 
        "email":req.body.email, 
        "password":req.body.password, 
        "address":req.body.address 
    }
    console.log(employee);
    
    mongodbclient.connect("mongodb://localhost:27017/participants", (err, db) => {
        if (err) {
            throw err;
        } else {
            console.log("Connection Established...");

            db.collection("userdetails").insertOne(employee, (err, info) => {
                if (err) {
                    throw err;
                } else {
                    console.log(info);
                    res.send({message: 'Record Inserted Successfully...'});
                }
            });
        }
        db.close();
    });
    
});

module.exports = register;