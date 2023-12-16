const express = require("express");

const authController = require("../controller/authController");

const userRouter = express.Router();

// No auth required to access these pages
userRouter.post("/signup", authController.signUp);
userRouter.post("/login", authController.logIn);

module.exports = userRouter;
