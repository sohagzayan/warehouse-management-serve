const express = require("express")
const todoRoute = express.Router()
const {getProduct , AddProduct , detailsProduct} = require("../controller/productController")

todoRoute.get('/',getProduct)
todoRoute.post('/',AddProduct)
todoRoute.get('/:id',detailsProduct)


module.exports = todoRoute