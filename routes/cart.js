const express = require("express");
const router = new express.Router();
const { check, validationResult } = require("express-validator");
const Cart = require("../models/Cart.js");
const Item = require("../models/Item.js");
const { Op } = require("sequelize");

//POST
//Post Item To Cart
router.post(
  "/",
  [
    check("item", "item name is required").not().isEmpty(),
    check("price", "item's price is required").not().isEmpty(),
    check("path", "item's link/path is required!").not().isEmpty(),
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
//increment the quantity of an item within the cart
router.post(
  "/increment",
  [check("item_name", "item name is required").not().isEmpty()],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
      } else {
        let { item_name } = req.body;

        const test = await Cart.findOne({
          where: { item: item_name },
        });

        await test.increment("quantity", { by: 1 });

        res.send("success");
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
//Get a specific item by ID after "click" within UI, to show in UI
router.get("/item/:id", async (req, res) => {
  try {
    let clickedItem = await Item.findOne({
      where: { id: req.params.id },
    });

    if (!clickedItem) {
      return res.send({ error: "no item found" });
    }

    res.send(clickedItem);
  } catch (error) {
    console.log(error);
  }
});

//GET
//GET the total cost of all items in cart
router.get("/total", async (req, res) => {
  try {
    const findAll = await Cart.findAll({
      attributes: ["price", "quantity"],
    });

    res.json({ findAll });
  } catch (error) {
    console.log(error);
  }
});

//GET
//Get items below $50
router.get("/filter2", async (req, res) => {
  try {
    const test = await Item.findAll({
      where: {
        price: {
          [Op.lt]: 51.0,
        },
      },
    });

    res.send(test);
  } catch (error) {
    console.log(error);
  }
});

//GET
//Get items below between 51 & $300
router.get("/filter3", async (req, res) => {
  try {
    const test = await Item.findAll({
      where: {
        price: {
          [Op.between]: [51, 300],
        },
      },
    });

    res.send(test);
  } catch (error) {
    console.log(error);
  }
});

//GET
//Get items below between 301 & $500
router.get("/filter4", async (req, res) => {
  try {
    const test = await Item.findAll({
      where: {
        price: {
          [Op.between]: [301, 500],
        },
      },
    });

    res.send(test);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
