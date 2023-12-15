const express = require("express");
const morgan = require("morgan");

const globalErrorHandler = require("./controller/errorController");

const userRouter = require("./routes/userRoutes");

const app = express();
app.use(morgan("dev"));

// Puts data into req.body
app.use(express.json());

// Routers
app.use("/user", userRouter);

// Global error handler
app.use(globalErrorHandler);
module.exports = app;
