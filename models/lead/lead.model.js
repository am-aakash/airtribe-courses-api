var DataTypes = require("sequelize/lib/data-types");

module.exports = (sequelize, Sequelize) => {
  const Lead = sequelize.define("lead", {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    linkedIn: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    course_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    instructor_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    comment: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.ENUM("waitlist", "accepted", "rejected"),
      defaultValue: "waitlist",
    },
  });

  return Lead;
};
