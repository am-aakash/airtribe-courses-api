const Sequelize = require("sequelize");
const db = require("../../models");
const Lead = db.leads;
const response = require("../../helpers/response.helper");

exports.SearchLead = async (req, res) => {
  let keyword = req.params.keyword;
  const Op = Sequelize.Op;
  console.log(req.body);
  try {
    let leads = await Lead.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            email: {
              [Op.like]: `%${keyword}%`,
            },
          },
        ],
      },
    });
    return response.responseHelper(
      res,
      true,
      {
        leads: leads,
      },
      "Successfully Fetched Leads"
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
