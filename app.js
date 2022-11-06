const express = require("express");
const app = express();

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
