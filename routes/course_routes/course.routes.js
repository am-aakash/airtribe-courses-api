const express = require("express");
const router = express.Router();

const create_course_controller = require("../../controllers/course_controllers/create_course.controller");

router.post("/create-course", create_course_controller.CreateCourse);

module.exports = router;
