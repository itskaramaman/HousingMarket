const express = require("express");
const router = express.Router();

const {getProperties, addProperty} = require("../controller/Property");

router.get("/", getProperties);
router.post("/", addProperty);

module.exports = router;