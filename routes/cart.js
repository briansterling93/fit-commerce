const express = require("express");
const router = new express.Router();
const { check, validationResult } = require("express-validator");
const Cart = require("../models/Cart.js");

//POST
//Post Item To Cart
router.post(
  "/",
  [
    // check("item", "item name is required").not().isEmpty(),
    // check("price", "item's price is required").not().isEmpty(),
    // check("path", "item's link/path is required").not().isEmpty(),
    check("quantity", "quantity is required").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
      } else {
        let { item, price, path, quantity } = req.body;

        await Cart.create({
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

        Cart.destroy({
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
//Get all cart items in cart
router.get("/", async (req, res) => {
  try {
    const findAll = await Cart.findAll();

    res.json({ findAll });
  } catch (error) {
    console.log(error);
    res.status(404);
  }
});

//GET
//GET the total cost of all items in cart
router.get("/total", async (req, res) => {
  try {
    const findAll = await Cart.findAll({
      attributes: ["price"],
    });

    res.json({ findAll });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
