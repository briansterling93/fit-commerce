const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
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

// POST route
// Description - Create new user/admin
router.post(
  "/",
  [
    check("email_address", "Valid email is required").isEmail(),
    check("password", "Password must be at least 5 chars").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    } else {
      try {
        let { email_address, password } = req.body;

        await Admin.create({
          email_address: email_address,
          password: password,
        });

        res.send("success");
      } catch (error) {
        console.log(error);
      }
    }
  }
);

module.exports = router;
