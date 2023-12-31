const express = require("express");

const authController = require("../controller/authController");
const carController = require("../controller/carController");
const userController = require("../controller/userController");

const carRouter = express.Router();

// No auth required to access these pages
carRouter.route("").get(carController.getAllCars);
carRouter.route("/:carId").get(carController.getCar);

// Login required
carRouter.use(authController.protect);

// Auth required to access
carRouter.use(authController.restrictTo("Admin"));
carRouter.route("").post(carController.addCar);
carRouter
  .route("/:carId")
  .delete(carController.deleteCar)
  .patch(carController.updateCar);
module.exports = carRouter;
