var DataTypes = require("sequelize/lib/data-types");

module.exports = (sequelize, Sequelize) => {
  const Courses = sequelize.define(
    "courses",
    {
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
      max_seats: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      instructor_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }
    // {
    //   // disable the modification of table names; By default, sequelize will automatically
    //   // transform all passed model names (first parameter of define) into plural.
    //   // if you don't want that, set the following
    //   freezeTableName: true,
    // }
  );

  return Courses;
};
