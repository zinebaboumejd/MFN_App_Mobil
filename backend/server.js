const express = require("express"); // import express
const dotenv = require("dotenv").config(); // import dotenv
const { errorHandler } = require("./middlewares/errorMiddleware"); // custom error handler
const port = process.env.PORT || 9000; // set our port
const app = express();
const connectDB = require("./config/db"); // import db connection
const cors = require("cors");
const { default: mongoose } = require("mongoose");
mongoose.set("strictQuery", false);
app.use(express.static("uploads"));
connectDB(); // connect to db

app.use(cors({ origin: "*" }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/auth", require("./src/Auth/routes/authRoute"));
app.use("/societes", require("./src/societes/routes/societeRoute"));

app.use(errorHandler);
const server=app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = server;
