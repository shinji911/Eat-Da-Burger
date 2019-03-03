const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
let orm = {
  selectAll: function(table, callback) {
    let queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  insertOne: function(table, col, val, callback) {
    let queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += col;
    queryString += ") VALUES ('";
    queryString += val;
    queryString += "');";

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },

  updateOne: function(table, col, val , condition, callback) {
    let queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += col;
    queryString += " = ";
    queryString += val;
    queryString += " WHERE ";
    queryString += condition;
    queryString += ";";

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  }
};

module.exports = orm;
