const dotenv = require("dotenv");
const mainApp = require("./app");
const dbConnection = require("./utils/databaseConnect");

// Env variables config file
dotenv.config({ path: "../config.env" });

const port = process.env.PORT || 3000;

// dbConnection.query("SELECT * FROM temp;", (err, result, fields) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//     console.log(fields);
//   }
// });

mainApp.listen(port, () => {
  console.log(`App running on port ${port}`);
});
