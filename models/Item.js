const Sequelize = require("sequelize");
const db = require("../config/database.js");

const Item = db.define("items", {
  item: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.STRING,
  },
  path: {
    type: Sequelize.STRING,
  },
});

module.exports = Item;
