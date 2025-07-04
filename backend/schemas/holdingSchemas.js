const mongoose = require("mongoose")
const { Schema } = mongoose;

const holdingSchemas=new Schema({
    name: String,
    qty:Number,
    avg:Number,
    price:Number,
    net:String,
    day:String
});

module.exports={holdingSchemas};