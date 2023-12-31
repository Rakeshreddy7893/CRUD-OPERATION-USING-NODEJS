var express = require('express');
let app = express();
let bodyparser = require('body-parser');
let cors=require('cors')
app.use(cors())

app.use(bodyparser.json());

app.use("/",      require("./home.js"));
app.use("/fetch", require("./fetch.js"));
app.use("/register", require("./register.js"));
app.use("/delete",require("./delete.js"));
app.use("/update",require("./update.js"));
app.use("/login",    require("./login.js"));

app.listen(3000);
console.log("Server Started @localhost:3000");
