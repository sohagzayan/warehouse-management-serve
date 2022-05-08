const express = require("express")
const todoRoute = express.Router()
const {getProduct , AddProduct , detailsProduct ,updateQuantity , deleteProduct , getMyProduct , getToken} = require("../controller/productController")
const checkLogin = require("../middleware/AuthChaking")
todoRoute.get('/',getProduct)
todoRoute.get('/myitem', checkLogin , getMyProduct)
todoRoute.post('/gettoken',getToken)
todoRoute.post('/',AddProduct)
todoRoute.get('/:id',detailsProduct)
todoRoute.put('/:id',updateQuantity)
todoRoute.delete('/:id',deleteProduct)



module.exports = todoRoute