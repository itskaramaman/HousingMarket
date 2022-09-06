const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'basic'
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("UserModel", UserSchema);