const mongoose = require("mongoose");

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected");
    } catch {
        console.error("Error Connecting DB");
    }
}

module.exports = connectDB;