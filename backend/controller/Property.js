const asyncHandler = require("express-async-handler");
const PropertyModel = require("../models/Property");


const getProperties = asyncHandler(async (req, res) => {
    const properties = await PropertyModel.find();
    res.status(200).json(properties);
})

const addProperty = asyncHandler(async(req, res)=>{
    const reqBody = JSON.parse(Buffer.concat([req.body]).toString());
    const { address, price, landmarks, images, pincode } = reqBody;
    const property = await PropertyModel.create({address: address, price: price, landmarks: landmarks, images: images, pincode: pincode});
    res.status(200).json({property});
})


module.exports = {getProperties, addProperty};