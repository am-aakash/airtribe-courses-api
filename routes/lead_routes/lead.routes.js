const express = require("express");
const router = express.Router();

const lead_registration_controller = require("../../controllers/lead_controllers/lead_registration.controller");
const update_status_controller = require("../../controllers/lead_controllers/update_status.controller");

router.post(
  "/lead-registration",
  lead_registration_controller.LeadRegistration
);

router.post("/update-status", update_status_controller.UpdateStatus);

module.exports = router;
