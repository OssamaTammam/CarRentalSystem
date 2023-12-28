const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const globalErrorHandler = require("./controller/errorController");

const userRouter = require("./routes/userRoutes");
const carRouter = require("./routes/carRoutes");
const reservationRouter = require("./routes/reservationRoutes");
//const officeRouter = require("./routes/officeRoutes");

const app = express();

// Example Express.js middleware to allow credentials
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", [
    "http://localhost:3000",
    "http://localhost:5173",
  ]); // Update with your client's origin
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const allowedOrigins = ["http://127.0.0.1:5173", "http://localhost:5173"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allow credentials (cookies, etc.)
    exposedHeaders: ["Set-Cookie"], // Specify the headers to expose
  }),
);

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
//app.use("/office", officeRouter);

// Global error handler
app.use(globalErrorHandler);
module.exports = app;
