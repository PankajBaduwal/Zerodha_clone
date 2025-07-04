const mongoose = require("mongoose")
const { model } = mongoose;


const{holdingSchemas}=require('../schemas/holdingSchemas');

const HoldingModel=new model("holding", holdingSchemas);

module.exports={HoldingModel};