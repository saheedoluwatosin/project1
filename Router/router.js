const express = require("express")
const { register } = require("../controller/control")

const router = express.Router()

Router.post("/register",register)
Router.post("/login",login)


module.exports = router