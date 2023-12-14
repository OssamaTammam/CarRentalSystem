const express = require("express");

const authController = require("../controller/authController");

const userRouter = express.Router();

// No auth required to access these pages
userRouter.post("/signup", authController.signUp);

module.exports = userRouter;
