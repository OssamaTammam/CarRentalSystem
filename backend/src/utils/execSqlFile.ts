import { readFileSync } from "fs";
import { join } from "path";
import { Connection } from "mysql2";

function executeSqlFile(connection: Connection, fileName: string) {
  try {
    // Read the .sql file
    const initDbScriptPath = join(__dirname, `/db/${fileName}`);
    const initDbScript = readFileSync(initDbScriptPath, "utf-8");

    // Split SQL statements using the semicolon as the delimiter
    const sqlStatements = initDbScript.split(";");

    // Execute each SQL statement
    for (const sqlStatement of sqlStatements) {
      if (sqlStatement.trim()) {
        // Execute the SQL statement
        connection.query(
          sqlStatement,
          (error: Error | null, results: any[]) => {
            if (error) {
              console.log(error);
            } else {
              console.log(results);
            }
          },
        );
      }
    }

    console.log("All SQL statements executed successfully");
  } catch (error: any) {
    console.error("Error executing SQL file:", error.message);
  } finally {
  }
}

// Call the function to execute the SQL file
export default executeSqlFile;
