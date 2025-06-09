// authorisation includes checking jwt token, username, password, bcrypting the password

const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// authorisation do baar kaam krti h , signup and signin

// creating a new user : signup
exports.registerUser = async(req,res) => {
    const {name,email,password} = req.body;
    try{
        // first check if user exist or not
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({
                msg:"User already exists"
            });
        }
        // else
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            name,
            email,
            password : hashedPassword
        });
        const token = jwt.sign({
            id : user._id
        }, process.env.JWT_SECRET , {
            expiresIn : "7d"
        });
        res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email } });
    }
    catch(error){
        res.status(500).json({
            msg : "Server error"
        });
    }
};


// logging in logic
exports.loginUser = async (req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                msg : "User not found"
            });
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({
                msg: "Invalid credentials"
            });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    }
    catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
};
