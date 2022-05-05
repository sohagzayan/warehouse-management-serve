const express = require("express")
const todoRoute = express.Router()
const {getProduct} = require("../controller/productController")

todoRoute.get('/',getProduct)


module.exports = todoRoute