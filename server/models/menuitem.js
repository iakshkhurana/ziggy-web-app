const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    itemName : String,
    description : String,
    price : Number,
    image : String,
    restaurant : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "restaurant"
    }
})

const menuModel = mongoose.Model("modelMenu", menuSchema);

module.exports = menuModel;