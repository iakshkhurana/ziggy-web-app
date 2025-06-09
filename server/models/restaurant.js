const mongoose = require('mongoose');
const restaurantSchema = mongoose.Schema({
    'name' : String,
    'non - veg' : {
        type : Boolean,
        default : false
    },
    'address' : String,
    'image' : 'String',
    'menu' : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'menuitem'
    }]
})

const restaurantModel = mongoose.model('restModel',restaurantSchema);
module.exports = restaurantModel;