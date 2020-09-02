const express = require("express");
const router = new express.Router();
const { check, validationResult } = require("express-validator");
const Cart = require("../models/Cart.js");

//GET
//Post Item To Cart
router.post(
  "/",
  [
    check("item", "item name is required").not().isEmpty(),
    check("price", "item's price is required").not().isEmpty(),
    check("path", "item's link/path is required").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
      } else {
        let { item, price, path } = req.body;

        await Cart.create({
          //create new item
          item: item,
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

//GET
//Get all cart items
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
//GET all cart items total cost
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
