const express = require("express");

const authController = require("../controller/authController");
const carController = require("../controller/carController");
const userController = require("../controller/userController");

const carRouter = express.Router();

// No auth required to access these pages
carRouter.route("").get(carController.getAllCars);
carRouter.route("").post(carController.addCar);
carRouter
  .route("/:model")
  .get(carController.getCar)
  .delete(carController.deleteCar)
  .patch(carController.updateCar);

// Login required

// Auth required to access
module.exports = carRouter;
