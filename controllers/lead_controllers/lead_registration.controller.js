const { v4: uuidv4 } = require("uuid");
const db = require("../../models");
const Lead = db.leads;
const response = require("../../helpers/response.helper");

exports.LeadRegistration = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let linkedIn = req.body.linkedIn;
  let instructor_id = res.body.instructor_id;
  let course_id = res.body.course_id;
  console.log(req.body);
  try {
    let lead = await Lead.create({
      name: name,
      email: email,
      phone: phone,
      linkedIn: linkedIn,
      instructor_id: instructor_id,
      course_id: course_id,
    });
    if (!lead) {
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
        lead: lead,
      },
      "Successfully registered"
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
