const express = require("express")
const { precontrol } = require("../controller/precontroller")
const router = express.Router()

router.post("/get-form-data", precontrol)

module.exports = router
