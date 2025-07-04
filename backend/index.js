require('dotenv').config();


const  express =require("express");

const mongoose=require('mongoose');
const bodyParaser=require("body-parser")
const cors= require("cors");

const PORT=process.env.PORT||3002;
const uri=process.env.MONGO_URL;

const {HoldingModel}=require('./model/HoldingModel');
const{PositionModel}=require('./model/PositionModel');

const {orderModel}=require('./model/OrdersModel');
const app=express();


app.use(cors());
app.use(bodyParaser.json());

//authentications:-https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/#heading-nodejs-and-expressjs-installation-and-configuration


// app.get('/addPosition', async(req, res)=>{
//     let tempPositions = [
//  {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
//     ];
// tempPositions.forEach((item)=>{
//     let newPosition=new PositionModel({
//      product:item.product,
//     name: item.name,
//     qty:item.qty,
//     avg:item.avg,
//     price:item.price,
//     net:item.net,
//     day:item.day,
//     isLoss:item.isLoss
//     });
//     newPosition.save();

// });
// res.send("done");
// });
app.post('/newOrder', async(req, res)=>{
let neworder= new orderModel({
  name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode,
});
  neworder.save();
res.send("order saved");
});


app.get('/allHoldings', async(req, res)=>{
    let allHoldings=await HoldingModel.find({});
    res.json(allHoldings);
});
app.get('/allPositions', async(req, res)=>{
    let allPositions=await PositionModel.find({});
    res.json(allPositions);
});

app.listen(PORT, ()=>{
 console.log("app is start");
mongoose.connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

});