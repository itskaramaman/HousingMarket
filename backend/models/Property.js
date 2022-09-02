const mongoose = require("mongoose");


const ImageSchema = mongoose.Schema({
    img: {
        data: Buffer,
        contentType: String
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
    images: ImageSchema,
    price: {
        type: Number,
        required: false,
    },
    landmarks: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("PropertyModel", PropertySchema);