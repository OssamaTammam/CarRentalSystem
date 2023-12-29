const express = require("express");

const authController = require("../controller/authController");
const userController = require("../controller/userController");
const carController = require("../controller/carController");

//const reservationRouter = require("./reservationRoutes");
const userRouter = express.Router();

// Mount user reservations on top of the user
userRouter.use("/reservations", reservationRouter);

// No auth required to access these pages
userRouter.post("/signup", authController.signUp);
userRouter.post("/login", authController.logIn);
userRouter.get("/logout", authController.logOut);
userRouter.post("/isLoggedIn", authController.isLoggedIn);

// Login required
userRouter.use(authController.protect);
userRouter
  .route("/me")
  .get(userController.getMe)
  .patch(userController.updateMe)
  .delete(userController.deleteMe);

// Auth required to access
userRouter.use(authController.restrictTo("Admin"));

userRouter.get("", userController.getAllUsers);
userRouter
  .route("/:username")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
