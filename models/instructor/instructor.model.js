var DataTypes = require("sequelize/lib/data-types");

module.exports = (sequelize, Sequelize) => {
  const Instructors = sequelize.define(
    "instructors",
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
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    // {
    //   // disable the modification of table names; By default, sequelize will automatically
    //   // transform all passed model names (first parameter of define) into plural.
    //   // if you don't want that, set the following
    //   freezeTableName: true,
    // }
  );

  return Instructors;
};
