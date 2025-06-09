const { default: mongoose } = require("mongoose");

const ordersSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    restaurant : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "restaurant"
    },
    items : [{
        item : {
            type: mongoose.Schema.Types.ObjectId,
            ref:"menuitem"
        },
        quantity : Number
    }],
    totalAmount : Number,
    status : {
        type : String,
        enum: ["PLACED", "PREPARING", "OUT_FOR_DELIVERY", "DELIVERED"],
        default: "PLACED"
    },
    paymentStatus : {
        type : String,
        enum : ["PENDING" , "PAID" , "FAILED"],
        default : "PENDING"
    }
}, {timestamps : true});

const ordersModel = mongoose.model("orderModel", ordersSchema);
module.exports = ordersModel;