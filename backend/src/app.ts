import express, { Application } from "express";
import userRouter from "./routes/userRoutes";

const app: Application = express();

// Puts data into req.body
app.use(
  express.json({
    limit: "10kb", //Limited to 10kb
  }),
);

// Routers
app.use("/user", userRouter);

export default app;
