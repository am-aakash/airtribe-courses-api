const Sequelize = require("sequelize");
const config = require("../config/db.config");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  port: config.port,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};
db.sequelize = sequelize;

// Instructor table
db.instructors = require("./instructor/instructor.model")(sequelize, Sequelize);

// Course table
db.courses = require("./course/course.model")(sequelize, Sequelize);

// Lead table
db.leads = require("./lead/lead.model")(sequelize, Sequelize);

// Joins
// db.course.belongsTo(db.instructors, {
//   foreignKey: "instructor_id",
// });

// db.lead.belongsTo(db.instructors, {
//   foreignKey: "instructor_id",
// });

// db.lead.belongsTo(db.course, {
//   foreignKey: "course_id",
// });

module.exports = db;
