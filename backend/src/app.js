const express = require("express");
const userRouter = require("./routes/userRoutes");

const app = express();

// Puts data into req.body
app.use(
  express.json({
    limit: "10kb", //Limited to 10kb
  }),
);

// Routers
app.use("/user", userRouter);

module.exports = app;
