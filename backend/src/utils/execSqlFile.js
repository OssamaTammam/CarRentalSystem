const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");

function executeSqlFile(connection, fileName) {
  try {
    // Read the .sql file
    const initDbScriptPath = path.join(__dirname, `/db/${fileName}`);
    const initDbScript = fs.readFileSync(initDbScriptPath, "utf-8");

    // Split SQL statements using the semicolon as the delimiter
    const sqlStatements = initDbScript.split(";");

    // Execute each SQL statement
    for (const sqlStatement of sqlStatements) {
      if (sqlStatement.trim()) {
        // Execute the SQL statement
        connection.query(sqlStatement, (error, results) => {
          if (error) {
            console.log(error);
          } else {
            console.log(results);
          }
        });
      }
    }

    console.log("All SQL statements executed successfully");
  } catch (error) {
    console.error("Error executing SQL file:", error.message);
  } finally {
  }
}

// Call the function to execute the SQL file
module.exports = executeSqlFile;
