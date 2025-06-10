const express = require("express");
const router = express.Router();
const {
  placeOrder,
  getUserOrders,
  getOrderStatus
} = require("../controllers/orderController");

router.post("/", placeOrder);
router.get("/user/:userId", getUserOrders);
router.get("/:orderId/status", getOrderStatus);

module.exports = router;
