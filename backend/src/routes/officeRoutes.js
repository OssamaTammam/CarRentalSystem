const express = require("express");

const authController = require("../controller/authController");
const carController = require("../controller/carController");
const userController = require("../controller/userController");
const officeController = require("../controller/officeController");

const officeRouter = express.Router();

// No auth required to access these pages
officeRouter.route("").get(officeController.getAllOffices);
officeRouter.route("").post(officeController.addOffice);
officeRouter
  .route("/:officeId")
  .get(officeController.getOffice)
  .delete(officeController.deleteOffice)
  .patch(officeController.updateOffice);

module.exports = officeRouter;
