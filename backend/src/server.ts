import "./utils/envConfig";
import app from "./app";

// Start the main app
const port: number = parseInt(process.env.PORT || "3000", 10);
app.listen(port, () => {
  console.log(`App running on port ${port}`);
  console.log(`Database running on port ${process.env.DB_PORT}`);
});
