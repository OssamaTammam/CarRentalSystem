// Env variables config file
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// DB connection settings
const dbConnection = require("./utils/databaseConnect");

// Start the main app
const port = process.env.PORT || 3000;
const mainApp = require("./app");
mainApp.listen(port, () => {
  console.log(`App running on port ${port}`);
  console.log(`Database running on port ${process.env.DB_PORT}`);
});
