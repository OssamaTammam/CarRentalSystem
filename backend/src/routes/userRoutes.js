const express = require("express");

const authController = require("../controller/authController");
const userController = require("../controller/userController");

const userRouter = express.Router();

// No auth required to access these pages
userRouter.post("/signup", authController.signUp);
userRouter.post("/login", authController.logIn);

userRouter.get("", userController.getAllUsers);
userRouter
  .route("/:username")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
