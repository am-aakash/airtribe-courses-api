const { v4: uuidv4 } = require("uuid");
const db = require("../../models");
const Lead = db.leads;
const response = require("../../helpers/response.helper");

exports.AddComment = async (req, res) => {
  let lead_id = req.body.lead_id;
  let comment = req.body.comment;
  console.log(req.body);
  try {
    let lead = await Lead.findOne({
      where: {
        id: lead_id,
      },
    });
    if (!lead) {
      return response.responseHelper(
        res,
        false,
        "Wrong Lead id",
        "Unexpected Failure"
      );
    }
    let updatedLead = await lead.update({
      comment: comment,
    });
    if (!updatedLead) {
      return response.responseHelper(
        res,
        false,
        "Comment not added",
        "Unexpected Failure"
      );
    }
    return response.responseHelper(
      res,
      true,
      {
        updatedLead: updatedLead,
      },
      "Successfully Added Comment"
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
