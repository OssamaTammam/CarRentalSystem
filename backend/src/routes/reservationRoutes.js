const express = require("express");

const reservationController = require("../controller/reservationController");
const authController = require("../controller/authController");

const reservationRouter = express.Router({ mergeParams: true });

// Login required
reservationRouter.use(authController.protect);
reservationRouter.route("").get(reservationController.getMyReservations);
reservationRouter.route("/reserve").post(reservationController.reserveCar);

// Auth required to access
reservationRouter.use(authController.restrictTo("Admin"));
reservationRouter.route("").get(reservationController.getAllReservations);
reservationRouter
  .route("/:resId")
  .get(reservationController.getReservation)
  .delete(reservationController.deleteReservation);

module.exports = reservationRouter;
