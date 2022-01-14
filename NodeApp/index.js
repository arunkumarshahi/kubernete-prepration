const express = require("express");
var MongoClient = require("mongodb").MongoClient;
const keys = require("./keys");
const mongoose = require("mongoose");
const Router = require("./routes");
// const { base64encode, base64decode } = require("nodejs-base64");

const port = 8090;

const app = express();

app.use(express.json());
app.use(Router);
console.log(`user =${keys.username}  passowrd=${keys.password}`);
let username = keys.username;
let password = keys.password;
const url = `mongodb://${username}:${password}@${keys.dbUrl}/`;
console.log("mongo url is == " + url);
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
