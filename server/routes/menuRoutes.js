const express = require("express");
const router = express.Router();
const {addMenuItem, getMenuItem} = require("../controllers/menuController");

router.post("/" , addMenuItem);
router.get("/:restaurantId" , getMenuItem);

module.exports = router;