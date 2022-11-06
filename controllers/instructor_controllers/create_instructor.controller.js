const { v4: uuidv4 } = require("uuid");
const db = require("../../models");
const Instructor = db.instructors;
const response = require("../../helpers/response.helper");

exports.CreateInstructor = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  if (name == null || name === "") {
    return response.responseHelper(
      res,
      false,
      "Name can not be empty",
      "Field required"
    );
  }
  console.log(req.body);
  try {
    let instructor = await Instructor.create({
      name: name,
      email: email,
      phone: phone,
    });
    if (!instructor) {
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
        instructor: instructor,
      },
      "Successfully added instructor"
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
