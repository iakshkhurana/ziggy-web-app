const MenuItem = require("../models/menuitem");

const addMenuItem = async (req,res) => {
    try{
        const {name, description, price, image, restaurant} = req.body;
        
        if (!name || !description || !price || !restaurant) {
            return res.status(400).json({
                msg: "Missing required fields",
                required: ["name", "description", "price", "restaurant"]
            });
        }

        if (isNaN(price)) {
            return res.status(400).json({
                msg: "Price must be a number"
            });
        }

        const item = await MenuItem.create({
            name,
            description,
            image,
            price,
            restaurant
        });
        res.status(201).json(item);
    }
    catch(err){
        console.error("Error adding menu item:", err);
        res.status(500).json({
            msg: "Failed to add menu item",
            error: err.message
        });
    }
};

const getMenuItem = async(req,res) => {
    try{
        const item = await MenuItem.find({
            restaurant : req.params.restaurantId
        });
        res.json(item);
    }
    catch(error){
        res.status(500).json({
            msg : "Failed to fetch menu"
        })
    }
};

module.exports = {
    getMenuItem,
    addMenuItem
}