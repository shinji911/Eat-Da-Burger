const orm = require("../config/orm.js");

let burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  insertOne: function(val, callback) {
    orm.insertOne("burgers", "burger_name", val, function(res) {
      callback(res);
    });
  },
  updateOne: function(val, condition, callback) {
    orm.updateOne("burgers", "devoured", val, condition, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;
