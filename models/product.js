const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "productname":String,
    "productid":String,
    "price":String,
    "description":String
})
let productmodel=mongoose.model("products",schema)
module.exports={productmodel}