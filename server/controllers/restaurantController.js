const Restaurant = require("../models/restaurant");

const addRestaurant = async(req,res) => {
    const {name, address, image} = req.body;
    try{
        const restaurant = await Restaurant.create({
            name, address, image
        });
        res.status(201).json(restaurant);
    }
    catch(error){
        res.status(500).json({
            msg : "Error creating restaurant"
        });
    }
}

const getRestaurant = async(req,res) => {
    try{
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    }
    catch(err){
        res.status(500).json({
            msg : "Error fetching restaurants"
        });
    }
}

module.exports = {
    addRestaurant,
    getRestaurant
}