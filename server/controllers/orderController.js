const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  try {
    const { user, restaurant, items, totalAmount } = req.body;
    const order = await Order.create({
      user,
      restaurant,
      items,
      totalAmount,
      status: "PLACED",
      paymentStatus: "PENDING"
    });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ msg: "Failed to place order" });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ user: userId }).populate("restaurant").populate("items.item");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch orders" });
  }
};

exports.getOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) return res.status(404).json({ msg: "Order not found" });
    res.json({ status: order.status });
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch order status" });
  }
};

