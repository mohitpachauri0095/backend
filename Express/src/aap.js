const express = require("express");
const cors = require("cors");
const postRouter = require("./routes/postRouter");
const app = express();

app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send("Hi from the server");
});
module.exports = app;