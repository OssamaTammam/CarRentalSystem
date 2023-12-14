import express, { Router } from "express";

const userRouter: Router = express.Router();

// No auth required to access these pages
userRouter.post("signup", authController.signUp);

export default userRouter;
