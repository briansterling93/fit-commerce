const Sequelize = require("sequelize");
const db = require("../config/database.js");

const UserSpecificCarts = db.define("user_specific_carts", {
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
  customer_id: {
    type: Sequelize.NUMBER,
  },
});

module.exports = UserSpecificCarts;
