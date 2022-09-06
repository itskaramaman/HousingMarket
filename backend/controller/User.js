const asyncHandler = require("express-async-handler");
const UserModel = require("../models/User");
const bcrypt = require("bcrypt");


const getUserWithEmail = asyncHandler(async(email)=>{
    const user = await UserModel.findOne({email});
    return user; 
})

// @desc     Get User with Email
// @route    Get /api/users/user
// @access   Private
const getUser = asyncHandler(async(req, res) => {
    const email = req.body.email;
    const user = await getUserWithEmail(email);
    if(!user){
        res.status(400);
    }
    res.status(200).send(user);
})

const getUsers = asyncHandler(async(req, res) => {
    const users = await UserModel.find();
    if(!users){
        res.status(400);
    }
    res.status(200).json(users);
})

const registerUser = asyncHandler(async(req, res) => {
    const {firstName, lastName, role, email, phone, password} = req.body;

    if(!firstName || !email || !password) {
        res.status(400);
        throw new Error("Please add all fields");
    }

    // check if user exists
    const userExists = await UserModel.findOne({email});
    if(userExists) {
        res.status(400);
        throw new Error("User already exists with this email");
    }

    // Gen salt 10 times
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await UserModel.create({firstName, lastName, role, email, phone, password: hashedPassword});
    if(!user){
        res.status(400);
        throw new Error("Invalid user data");
    }
    res.status(201).json(user);
})


const loginUser = asyncHandler(async(req, res)=>{
    // const email
})

module.exports = { getUser, getUsers, registerUser, getUserWithEmail, loginUser };