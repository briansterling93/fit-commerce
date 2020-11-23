const express = require("express");
const router = new express.Router();
const { check, validationResult } = require("express-validator");
const UserSpecificCarts = require("../models/UserSpecificCarts.js");
const Item = require("../models/Item.js");
const User = require("../models//User.js");
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
    check("customer_id", "customer id is required").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
      } else {
        let { item, price, path, quantity, customer_id } = req.body;

        await UserSpecificCarts.create({
          //create new item
          item: item,
          price: price,
          path: path,
          quantity: quantity,
          customer_id: customer_id,
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
  "/:id/increment",
  [check("item_name", "item name is required").not().isEmpty()],

  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
      } else {
        let { item_name } = req.body;

        const findCart = await UserSpecificCarts.findOne({
          where: {
            [Op.and]: [{ customer_id: req.params.id }, { item: item_name }],
          },
        });

        await findCart.increment("quantity", { by: 1 });

        res.send("success");
      }
    } catch (error) {
      console.log(error);
    }
  }
);

//GET
//Get all of a user's cart by ID
router.get("/:id", async (req, res) => {
  try {
    let queried_user = await UserSpecificCarts.findAll({
      where: { customer_id: req.params.id },
    });

    if (!queried_user) {
      return res.send({ error: "id not found" });
    } else {
      return res.json({
        queried_user,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
