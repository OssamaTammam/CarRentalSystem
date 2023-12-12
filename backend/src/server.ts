const dotenv = require("dotenv");
const mainApp = require("./app");

// Env variables config file
dotenv.config({ path: "../config.env" });

const port = process.env.PORT || 3000;

mainApp.listen(port, () => {
  console.log(`App running on port ${port}`);
});
