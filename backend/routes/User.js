const express = require("express");
const { getUser, getUsers, registerUser, loginUser } = require("../controller/User");

const router = express.Router();

router.get("/", getUsers);
router.post("/user", getUser);
router.post("/", registerUser);
router.post("/login", loginUser);

module.exports = router;