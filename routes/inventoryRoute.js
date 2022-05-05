const express = require("express")
const todoRoute = express.Router()
const {getProduct , AddProduct} = require("../controller/productController")

todoRoute.get('/',getProduct)
todoRoute.post('/',AddProduct)


module.exports = todoRoute