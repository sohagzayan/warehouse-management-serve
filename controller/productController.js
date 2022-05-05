const Product = require('../model/productSchema')



exports.getProduct = async(req , res)=>{
    const result = req.query.limit
    try{
        let products ;
        if(result){
           products = await Product.find({},null ,{limit : result})
        }else{
           products = await Product.find({})
        }
        console.log(products.length);
        console.log(result);
        res.send(products)

    }
    catch(err){
        res.send(err)
    }
}


exports.AddProduct = async (req , res)=>{
    try{
      const newProduct =  await Product(req.body)
      await newProduct.save()
      res.send(newProduct)
    }
    catch(err){
        res.send(err)
    }
}


exports.updateQuantity = (req , res)=>{
    res.send("hello quantity")
}
exports.updateProduct = (req , res)=>{
    res.send("update todo")
}
exports.deleteProduct = (req , res)=>{
    res.send("delete todo")
}
exports.detailsProduct= (req , res)=>{
    res.send("todo todo")
}

