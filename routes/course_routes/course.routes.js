const express = require("express");
const router = express.Router();

const create_course_controller = require("../../controllers/course_controllers/create_course.controller");
const update_course_controller = require("../../controllers/course_controllers/update_course.controller");

router.post("/create-course", create_course_controller.CreateCourse);

router.put("/update-course", update_course_controller.UpdateCourse);

module.exports = router;