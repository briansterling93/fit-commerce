const Sequelize = require("sequelize");
const db = require("../config/database.js");

const Admin = db.define("admins", {
  email_address: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

module.exports = Admin;
