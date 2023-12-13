const mysql = require("mysql2");
const execSqlFile = require("./execSqlFile");

const dbInitConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

execSqlFile(dbInitConnection, "initDb.sql");
execSqlFile(dbInitConnection, "dummyData.sql");

dbInitConnection.end();

module.exports = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});
