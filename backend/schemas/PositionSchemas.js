const mongoose = require("mongoose")
const { Schema } = mongoose;

const positionSchemas=new Schema({
    product:String,
    name: String,
    qty:Number,
    avg:Number,
    price:Number,
    net:String,
    day:String,
    isloss:Boolean
});

module.exports={positionSchemas};

 