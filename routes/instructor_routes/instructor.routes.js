const express = require("express");
const router = express.Router();

const create_instructor_controller = require("../../controllers/instructor_controllers/create_instructor.controller");
const fetch_instructors_controller = require("../../controllers/instructor_controllers/fetch_instructor.controller");

router.post(
  "/create-instructor",
  create_instructor_controller.CreateInstructor
);

router.get("/fetch-instructors", fetch_instructors_controller.GetInstructors);

module.exports = router;
