const mongoose = require("mongoose")
const { Schema } = mongoose;

const orderSchemas=new Schema({
    name: String,
    qty:Number,
    price:Number,
    mode:String
   
});

module.exports={orderSchemas};
   
   
   
   