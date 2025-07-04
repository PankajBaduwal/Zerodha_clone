const mongoose = require("mongoose")
const { model } = mongoose;

const{orderSchemas}=require('../schemas/OrderSchemas');

const orderModel=new model("order",orderSchemas);

module.exports={orderModel};