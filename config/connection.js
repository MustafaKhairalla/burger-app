// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  port: 3306,
  user: "ba02317cc757bb",
  password: "7589bc3a",
  database: "heroku_df7f5fcd5be6f6e"
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
