// Env variables config file
import * as dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

// Start the main app
const port: number = parseInt(process.env.PORT || "3000", 10);
const mainApp = require("./app");
mainApp.listen(port, () => {
  console.log(`App running on port ${port}`);
  console.log(`Database running on port ${process.env.DB_PORT}`);
});
