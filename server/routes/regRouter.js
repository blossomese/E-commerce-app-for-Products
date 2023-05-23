const express = require("express");
const router = express.Router();
const register = require("../controller/regController");

router.post("/register", register);

module.exports = router;
