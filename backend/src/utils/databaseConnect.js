const mysql = require("mysql2");

let host;
if (process.env.NODE_ENV === "prod") {
  host = process.env.DB_HOST_DOCKER;
} else {
  host = process.env.DB_HOST_LOCAL;
}

const connectionPool = mysql.createPool({
  host: host,
  port: parseInt(process.env.DB_PORT || "3306", 10),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

module.exports = connectionPool.promise();
