const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//Instructor Routes
const instructor_routes = require("./routes/instructor_routes/instructor.routes");
app.use("/api/instructor", instructor_routes);

//Course Routes
const course_routes = require("./routes/course_routes/course.routes");
app.use("/api/course", course_routes);

//Lead Routes
const lead_routes = require("./routes/lead_routes/lead.routes");
app.use("/api/lead", lead_routes);

// home route
app.use("/", (req, res) => {
  res.send("Airtribe courses API working");
});

// db sequelize
const db = require("./models/index");
// db.sequelize.sync({
//   force: true,
// });

const CONFIG = require("./config/config");

// Server
const port = CONFIG.port;
app.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});
