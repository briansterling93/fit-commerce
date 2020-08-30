const Sequelize = require("sequelize");
const db = require("../config/database.js");

const Cart = db.define("carts", {
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

module.exports = Cart;
