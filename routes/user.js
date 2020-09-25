const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const Sequelize = require("sequelize");
const auth = require("../middleware/auth");

//GET
//Test route
// pulling current user to the front end
router.get("/authorized", auth, async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

// POST
// Add new user / Sign Up
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

        //verify if user already existing
        let existingUser = await User.findOne({
          where: { email_address: email_address },
        });

        if (existingUser) {
          return res.send("email address is already exists");
        } else {
          const salt = await bcrypt.genSalt(10);

          const user = await User.create({
            name: name,
            email_address: email_address,
            password: await bcrypt.hash(password, salt),
          });

          const payload = {
            user: {
              id: user.id,
            },
          };

          jwt.sign(
            payload,
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) {
                throw err;
              }
              res.json({ token });
            }
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
);

// POST
// Login route
router.post(
  "/login",
  [
    check("email_address", "email address is required").isEmail(),
    check("password", "password is required").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    } else
      try {
        let { email_address, password } = await req.body;

        let user = await User.findOne({
          where: {
            email_address: email_address,
          },
        });

        if (!user) {
          res.json({ error: "No user found" });
        } else {
          const credentialCompare = await bcrypt.compare(
            password,
            user.password
          );

          if (!credentialCompare) {
            res.json("invalid credentials");
          } else {
            const payload = {
              user: {
                id: user.id,
              },
            };

            jwt.sign(
              payload,
              config.get("jwtSecret"),
              { expiresIn: 3600 },
              (error, token) => {
                if (error) res.json({ error: "Credential Error" });
                else {
                  res.json({ token });
                }
              }
            );
          }
        }
      } catch (error) {
        console.log(error);
        res.json({ error: "invalid credentials" });
      }
  }
);

// GET route
// Get all profiles
// Protected Route
router.get("/findall", async (req, res) => {
  try {
    const findAll = await User.findAll({
      attributes: ["email_address", "name", "id"],
    });

    res.json({ findAll });
  } catch (error) {
    console.log(error);
  }
});

// GET route
// Get current authorized user info
// Protected Route
//only a backend route
router.get("/me/:user_id", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.user_id,
      },
    });

    if (!user) {
      res.json({ error: "no profile for this user" });
    }

    res.json({ user });
  } catch (error) {
    console.log(error);
    res.json({ error: "Credential error" });
  }
});

module.exports = router;
