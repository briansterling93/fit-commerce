const Sequelize = require("sequelize");
const db = require("../config/database.js");

const User = db.define("users", {
  name: {
    type: Sequelize.STRING,
  },
  email_address: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
