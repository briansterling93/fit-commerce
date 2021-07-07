const Sequelize = require("sequelize");
const db = require("../config/database.js");

const OrderHistory = db.define("orders", {
  item_path: {
    type: Sequelize.JSON,
  },
  items_ordered: {
    type: Sequelize.JSON,
  },
  order_total: {
    type: Sequelize.STRING,
  },
  customer_id: {
    type: Sequelize.NUMBER,
  },
  quantity: {
    type: Sequelize.JSON,
  },
  price: {
    type: Sequelize.JSON,
  },
});

module.exports = OrderHistory;
