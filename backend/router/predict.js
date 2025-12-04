const express = require("express")
const { predicationController } = require("../controller/precontroller")
const router = express.Router()

router.post("/get-form-data", predicationController)

module.exports = router
