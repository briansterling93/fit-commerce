const express = require("express");
const router = express.Router();
const db = require("../config/database.js");
const Admin = require("../models/Admin.js");
const Sequelize = require("sequelize");

// GET route
// Description - Find all admins
router.get("/", async (req, res) => {
  try {
    const findAll = await Admin.findAll();

    res.json({ findAll });
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
