const asyncHandler = require("express-async-handler");
const PropertyModel = require("../models/Property");


const getProperties = asyncHandler(async (req, res) => {
    const properties = await PropertyModel.find();
    res.status(200).json(properties);
})


module.exports = getProperties;