const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    }
})

const PropertySchema = mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    images: [{
        type: ImageSchema,
        required: true
    }],
    price: {
        type: Number,
        required: false,
    },
    landmarks: [{
        type: String,
        required: false
    }]
})

module.exports = mongoose.model("PropertyModel", PropertySchema);