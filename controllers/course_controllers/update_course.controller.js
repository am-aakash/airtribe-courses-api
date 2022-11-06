const { v4: uuidv4 } = require("uuid");
const db = require("../../models");
const Instructor = db.instructors;
const Course = db.courses;
const response = require("../../helpers/response.helper");

exports.UpdateCourse = async (req, res) => {
  let course_id = req.body.course_id;
  let name = req.body.name;
  let max_seats = req.body.max_seats;
  let instructor_id = "29e4c215-5602-42c2-bb76-41215303e8de"; //res.body.instructor_id;
  let start_date = req.body.start_date;
  console.log(req.body);
  try {
    let course = await Course.findOne({
      where: {
        id: course_id,
      },
    });
    if (!course) {
      return response.responseHelper(
        res,
        false,
        "No course found.",
        "Unexpected Failure"
      );
    }
    let courseUpdated = await course.update({
      name: name,
      max_seats: max_seats,
      instructor_id: instructor_id,
      start_date: start_date,
    });
    if (!courseUpdated) {
      return response.responseHelper(
        res,
        false,
        "Course not updated",
        "Unexpected Failure"
      );
    }
    return response.responseHelper(
      res,
      true,
      {
        courseUpdated: courseUpdated,
      },
      "Successfully updated course"
    );
  } catch (error) {
    console.log(error);
    return response.responseHelper(
      res,
      false,
      "Something went wrong.",
      "Unexpected Failure"
    );
  }
};
