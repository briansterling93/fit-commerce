const Sequelize = require("sequelize");
const db = require("../config/database.js");

const OrderHistory = db.define("order_history", {
  item_path: {
    type: Sequelize.STRING,
  },
  order_total: {
    type: Sequelize.STRING,
  },
  customer_id: {
    type: Sequelize.NUMBER,
  },
});

module.exports = OrderHistory;
