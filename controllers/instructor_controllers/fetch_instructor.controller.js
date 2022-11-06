const db = require("../../models");
const Instructor = db.instructors;
const response = require("../../helpers/response.helper");

exports.GetInstructors = async (req, res) => {
  try {
    const instructor = await Instructor.findAll();
    if (instructor) {
      return response.responseHelper(
        res,
        true,
        {
          instructor: instructor,
        },
        "Successfully fetched all instructors"
      );
    } else {
      return response.responseHelper(
        res,
        true,
        {
          count: 0,
          data: [],
        },
        "No Instructors"
      );
    }
  } catch (e) {
    console.log(e);
    return response.responseHelper(
      res,
      false,
      "Instructors Failed to load",
      "Something Went Wrong"
    );
  }
};
