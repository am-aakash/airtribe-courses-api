const express = require("express");
const router = express.Router();

const lead_registration_controller = require("../../controllers/lead_controllers/lead_registration.controller");

router.post(
  "/lead-registration",
  lead_registration_controller.LeadRegistration
);

module.exports = router;
