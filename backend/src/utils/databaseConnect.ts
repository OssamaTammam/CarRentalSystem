import * as mysql from "mysql2";
import { Pool, Connection } from "mysql2";
import execSqlFile from "./execSqlFile";

const dbInitConnection: Connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "3306", 10),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

execSqlFile(dbInitConnection, "initDb.sql");
execSqlFile(dbInitConnection, "dummyData.sql");

dbInitConnection.end();

const dbPool: Pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "3306", 10),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

export default dbPool;
