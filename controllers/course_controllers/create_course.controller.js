const { v4: uuidv4 } = require("uuid");
const db = require("../../models");
const Instructor = db.instructors;
const Course = db.courses;
const response = require("../../helpers/response.helper");

exports.CreateCourse = async (req, res) => {
  let name = req.body.name;
  let max_seats = req.body.max_seats;
  let instructor_id = res.body.instructor_id;
  let start_date = req.body.start_date;
  console.log(req.body);
  try {
    let course = await Course.create({
      name: name,
      max_seats: max_seats,
      instructor_id: instructor_id,
      start_date: start_date,
    });
    if (!course) {
      return response.responseHelper(
        res,
        false,
        "Something went wrong.\nPlease try again.",
        "Unexpected Failure"
      );
    }
    return response.responseHelper(
      res,
      true,
      {
        course: course,
      },
      "Successfully added course"
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
