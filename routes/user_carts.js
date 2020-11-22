const express = require("express");
const router = new express.Router();
const { check, validationResult } = require("express-validator");
const UserCart = require("../models/UserCart.js");
const Item = require("../models/Item.js");
const User = require("../models//User.js");
const { Op } = require("sequelize");

router.get("/", (req, res) => {
  res.send("hello world json");
});

module.exports = router;
