const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const globalErrorHandler = require("./controller/errorController");

const userRouter = require("./routes/userRoutes");
const carRouter = require("./routes/carRoutes");
const reservationRouter = require("./routes/reservationRoutes");
const officeRouter = require("./routes/officeRoutes");

const app = express();

// Log requests into the console
app.use(morgan("dev"));

// Puts data into req.body
app.use(express.json());
// Read cookies
app.use(cookieParser());

// Routers
app.use("/user", userRouter);
app.use("/car", carRouter);
app.use("/reservation", reservationRouter);
app.use("/office", officeRouter);

// Global error handler
app.use(globalErrorHandler);
module.exports = app;
