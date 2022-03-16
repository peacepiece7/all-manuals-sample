const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const router = require("./routers/router");

const app = express();

app.use(
  cors({
    origin: true,
  })
);

app.use("/", router);

app.listen(8337, () => {
  console.log("😃😃 Listen to the port : 8337 😃😃");
});
