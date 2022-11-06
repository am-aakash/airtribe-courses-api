const express = require("express");
const router = express.Router();

const lead_registration_controller = require("../../controllers/lead_controllers/lead_registration.controller");
const update_status_controller = require("../../controllers/lead_controllers/update_status.controller");
const search_lead_controller = require("../../controllers/lead_controllers/search_lead.controller");

router.post(
  "/lead-registration",
  lead_registration_controller.LeadRegistration
);

router.post("/update-status", update_status_controller.UpdateStatus);

router.post("/search-lead", search_lead_controller.SearchLead);

module.exports = router;
