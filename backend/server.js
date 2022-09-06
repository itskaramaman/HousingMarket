require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

connectDB();

// Get app and use middlewares
const app = express();
app.use(bodyParser.json());

// API Routes
app.use("/api/properties", require("./routes/Property"));
app.use("/api/users", require("./routes/User"));

// Get port and start server
const port = process.env.PORT || 8000
app.listen(port, ()=>console.log(`Server running on port ${port}`))