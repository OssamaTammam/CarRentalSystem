const express = require("express");
const morgan = require("morgan");

const userRouter = require("./routes/userRoutes");

const app = express();
app.use(morgan("dev"));

// Puts data into req.body
app.use(express.json());

// Routers
app.use("/user", userRouter);

module.exports = app;
