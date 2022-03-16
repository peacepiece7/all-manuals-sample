const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use("/", (res, req, next) => {
  res.send("data");
});

app.listen(8337, () => {
  console.log("Listen to the port : 8337");
});
