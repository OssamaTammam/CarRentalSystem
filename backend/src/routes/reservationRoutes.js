const express = require("express");

const reservationController = require("../controller/reservationController");
const authController = require("../controller/authController");

const reservationRouter = express.Router();

// No auth required to access these pages

// Login required
reservationRouter.use(authController.protect);
reservationRouter.route("/reserve").post(reservationController.reserveCar);

// Auth required to access
reservationRouter.use(authController.restrictTo("Admin"));

module.exports = reservationRouter;
