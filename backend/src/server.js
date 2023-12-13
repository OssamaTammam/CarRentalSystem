// Env variables config file
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// DB connection settings
const dbConnection = require("./utils/databaseConnect");
dbConnection.query("SELECT * FROM temp", (err, result, fields) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
    console.log(fields);
  }
});

// Start the main app
const port = process.env.PORT || 3000;
const mainApp = require("./app");
mainApp.listen(port, () => {
  console.log(`App running on port ${port}`);
});
