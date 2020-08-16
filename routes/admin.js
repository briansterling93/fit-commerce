const express = require("express");
const router = new express.Router();
const { check, validationResult } = require("express-validator");
const Item = require("../models/Item");
const User = require("../models/User");

//GET route
//Populate all items (admin route)
router.get("/", async (req, res) => {
  try {
    const findAll = await Item.findAll();

    res.json({ findAll });
  } catch (error) {
    console.log(error);
  }
});

//POST route
//Post new item (admin route)
router.post(
  "/",
  [
    check("name", "item name is required").not().isEmpty(),
    check("price", "item's price is required").not().isEmpty(),
    check("path", "item's link/path is required").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
      } else {
        let { name, price, path } = req.body;

        await Item.create({
          //create new item
          name: name,
          price: price,
          path: path,
        });

        res.send(req.body);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
