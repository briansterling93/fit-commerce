const express = require("express");
const router = new express.Router();
const { check, validationResult } = require("express-validator");
const { Op } = require("sequelize");
const OrderHistory = require("../models/OrderHistory.js");

//GET
//get all user orders
router.get("/", async (req, res) => {
  try {
    const findAll = await OrderHistory.findAll();

    res.json({ findAll });
  } catch (error) {
    console.log(error);
  }
});

//GET
//get a specific users orders
router.get("/:id", async (req, res) => {
  try {
    let queried_orderHistory = await OrderHistory.findAll({
      where: { customer_id: req.params.id },
    });

    if (!queried_orderHistory) {
      return res.send({ error: "id not found" });
    } else {
      return res.json({
        queried_orderHistory,
      });
    }
  } catch (error) {}
});

//POST
//post new order to users order history
router.post(
  "/new",
  [
    check("item_path", "item path is required").not().isEmpty(),
    check("order_total", "order total is required").not().isEmpty(),
    check("customer_id", "customer_id is required").not().isEmpty(),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
      } else {
        let { item_path, order_total, customer_id } = req.body;

        await OrderHistory.create({
          //create new item
          item_path: item_path,
          order_total: order_total,
          customer_id: customer_id,
        });

        res.send(req.body);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
