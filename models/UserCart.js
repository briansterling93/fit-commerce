const Sequelize = require("sequelize");
const db = require("../config/database.js");

const UserCart = db.define("user_carts", {
  item: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.STRING,
  },
  path: {
    type: Sequelize.STRING,
  },
  quantity: {
    type: Sequelize.NUMBER,
  },
});

module.exports = UserCart;
