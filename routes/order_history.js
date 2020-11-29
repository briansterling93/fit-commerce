const express = require("express");
const router = new express.Router();
const { check, validationResult } = require("express-validator");
const { Op } = require("sequelize");
const OrderHistory = require("../models/OrderHistory");

//GET
//get all user orders
router.get("/", (req, res) => {
  const findAll = OrderHistory.findAll();

  res.json({ findAll });
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
