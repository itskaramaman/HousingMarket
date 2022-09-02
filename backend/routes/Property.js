const express = require("express");
const router = express.Router();

const getProperties = require("../controller/Property");

router.get("/", getProperties);


module.exports = router;