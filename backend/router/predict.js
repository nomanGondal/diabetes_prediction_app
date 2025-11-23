const express = require("express");
const { precontrol } = require("../controller/precontroller");
const router = express.Router();

router.post("/pre",precontrol);

module.exports = router; 