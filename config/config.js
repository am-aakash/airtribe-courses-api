const CONFIG = {}; // Make this global to use all over the application

CONFIG.app = "development"; //production or development
CONFIG.port = "3033";

if (CONFIG.app === "production") {
  // TODO
} else if (CONFIG.app === "development") {
  CONFIG.db_dialect = "postgres";
  CONFIG.db_host = "3.8.164.107";
  CONFIG.db_port = "5432";
  CONFIG.db_name = "airtribe_db";
  CONFIG.db_user = "postgres";
  CONFIG.db_password = "9334";
}

module.exports = CONFIG;
