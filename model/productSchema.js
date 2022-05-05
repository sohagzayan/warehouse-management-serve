const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    image : {
        type : String,
        required : true
    } ,
    foodCategory : {
        type : String,
        required : true
    } ,
    title : {
        type : String,
        required : true
    } ,
    supplier : {
        type : String,
        required : true
    } ,
    price : {
        type : String,
        required : true
    } ,
    quantity : {
        type : String,
        required : true
    } ,
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("Product" , productSchema)

