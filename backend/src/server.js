const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

// Start the main app
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
  console.log(`Database running on port ${process.env.DB_PORT}`);
});
