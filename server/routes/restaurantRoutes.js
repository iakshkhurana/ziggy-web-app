const express = require("express");
const { addRestaurant, getRestaurant } = require("../controllers/restaurantController");

const router = express.Router();

router.post("/", addRestaurant);
router.get("/", getRestaurant);

module.exports = router;