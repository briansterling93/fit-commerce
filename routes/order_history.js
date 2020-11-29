const express = require("express");
const router = new express.Router();
const { check, validationResult } = require("express-validator");
const { Op } = require("sequelize");
const OrderHistory = require("../models/OrderHistory");

//GET
//get all user orders
router.get("/", (req, res) => {});

//POST
//post new order to users order history
router.post("/new", (req, res) => {});

module.exports = router;
