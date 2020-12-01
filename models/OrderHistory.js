const Sequelize = require("sequelize");
const db = require("../config/database.js");

const OrderHistory = db.define("orders", {
  item_path: {
    type: Sequelize.JSON,
  },
  order_total: {
    type: Sequelize.STRING,
  },
  customer_id: {
    type: Sequelize.NUMBER,
  },
});

module.exports = OrderHistory;
