const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User.js");
const Sequelize = require("sequelize");

//GET
//Get all users
router.get(
  "/",

  async (req, res) => {
    try {
      const findAll = await User.findAll();

      res.json({ findAll });
    } catch (error) {}
  }
);

//POST /newuser
//Add new user
router.post(
  "/newuser",
  [
    check("name", "name is required").not().isEmpty(),
    check("email_address", "email address is required").isEmail(),
    check("password", "password is required").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    } else {
      try {
        let { name, email_address, password } = req.body;

        await User.create({
          name: name,
          email_address: email_address,
          password: password,
        });

        res.send("success");
      } catch (error) {}
    }
  }
);

module.exports = router;
