const express = require("express");
const router = new express.Router();
const { check, validationResult } = require("express-validator");
const UserCart = require("../models/UserCart.js");
const Item = require("../models/Item.js");
const { Op } = require("sequelize");

// //POST
// //Post Item To User Cart
router.post(
  "/",
  [
    check("item", "item name is required").not().isEmpty(),
    check("price", "item's price is required").not().isEmpty(),
    check("path", "item's link/path is required").not().isEmpty(),
    check("quantity", "quantity is required").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
      } else {
        let { item, price, path, quantity } = req.body;

        await UserCart.create({
          //create new item
          item: item,
          price: price,
          path: path,
          quantity: quantity,
        });

        res.send(req.body);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

//POST
//increment the quantity of an item within the USER cart
router.post(
  "/increment",
  [
    check("item_name", "item name is required").not().isEmpty(),
    check("item_quantity", "item increment is required").not().isEmpty(),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
      } else {
        let { item_name, item_quantity } = req.body;

        const test = await UserCart.findOne({
          where: { item: item_name },
        });

        await test.increment("quantity", { by: parseInt(item_quantity) });

        res.send("success");
      }
    } catch (error) {
      console.log(error);
    }
  }
);

//GET
//Get all cart items in user cart
router.get("/all", async (req, res) => {
  try {
    const findAll = await UserCart.findAll();

    res.json({ findAll });
  } catch (error) {
    console.log(error);
    res.status(404);
  }
});

//POST
//delete a specific item from cart
router.post(
  "/remove",
  [check("item_name", "item name is required").not().isEmpty()],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
      } else {
        let { item_name } = await req.body;

        UserCart.destroy({
          where: {
            item: item_name,
          },
        });
      }

      res.send("item removed");
    } catch (error) {
      console.log(error);
    }
  }
);

//GET
//GET the total cost of all items in cart
router.get("/total", async (req, res) => {
  try {
    const findAll = await UserCart.findAll({
      attributes: ["price", "quantity"],
    });

    res.json({ findAll });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
