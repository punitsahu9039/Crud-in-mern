const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    productno:Number,
    name:String,
    city:String,
    price:Number
})
module.exports=mongoose.model("testproduct",productSchema);