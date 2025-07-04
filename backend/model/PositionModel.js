const mongoose = require("mongoose")
const { model } = mongoose;

const{positionSchemas}=require('../schemas/PositionSchemas');

const PositionModel=new model("position", positionSchemas);

module.exports={PositionModel};