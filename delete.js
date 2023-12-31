var express = require('express');
var mongodb = require('mongodb');
var mongodbclient = mongodb.MongoClient();

let empdelete = express.Router().delete("/:id", (req, res) => {
    
    let id = parseInt(req.params.id);

    mongodbclient.connect("mongodb://localhost:27017/participants", (err, db) => {
        if (err) {
            throw err;
        } else {
            console.log("Connection Established...");

            db.collection("userdetails").deleteOne({"id": id}, (err, info) => {
                if (err) {
                    throw err;
                } else {
                    console.log(info);
                    res.send({message: "Employee Record Deleted"});
                }
            });
        }
        db.close();
    });

});

module.exports = empdelete;