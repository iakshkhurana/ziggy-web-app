const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        unique : true
    },
    password : String,
    isAdmin : {
        type : Boolean,
        default : false
    }
}, {timestamps : true});

const UserModel = mongoose.model("User",userSchema);

module.exports = UserModel;



