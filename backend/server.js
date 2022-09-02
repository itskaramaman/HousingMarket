require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

connectDB();
const app = express();

app.use("/api/properties", require("./routes/Property"));

const port = process.env.PORT || 8000
app.listen(port, ()=>console.log(`Server running on port ${port}`))