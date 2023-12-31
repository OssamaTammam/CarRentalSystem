const express = require("express");

const authController = require("../controller/authController");
const officeController = require("../controller/officeController");

const officeRouter = express.Router();

// No auth required to access these pages
officeRouter.route("").get(officeController.getAllOffices);
officeRouter.route("").post(officeController.addOffice);
officeRouter.route("/:officeId").get(officeController.getOffice);

// Login required
officeRouter.use(authController.protect);
// Auth required to access
officeRouter.use(authController.restrictTo("Admin"));
officeRouter
  .route("/:officeId")
  .delete(officeController.deleteOffice)
  .patch(officeController.updateOffice);

module.exports = officeRouter;
