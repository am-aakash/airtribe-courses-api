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
db.instructor = require("./instructor/instructor.model")(sequelize, Sequelize);

// Course table
db.course = require("./course/course.model")(sequelize, Sequelize);

// Lead table
db.lead = require("./lead/lead.model")(sequelize, Sequelize);

// Joins

db.course.belongsTo(db.instructor, {
  foreignKey: "instructor_id",
});

db.lead.belongsTo(db.instructor, {
  foreignKey: "instructor_id",
});

db.lead.belongsTo(db.course, {
  foreignKey: "course_id",
});

module.exports = db;
