const express = require("express");

const authController = require("../controller/authController");
const carController = require("../controller/carController");
const userController = require("../controller/userController");

const carRouter = express.Router();

// No auth required to access these pages
carRouter.route("").get(carController.getAllCars);
carRouter.get("/:id", carController.getCar);

carRouter.post("", carController.addCar);
// Login required

// Auth required to access
module.exports = carRouter;
