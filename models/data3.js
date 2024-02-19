import mongoose from "mongoose";
const Data = mongoose.models.data3 || mongoose.model("data3", new mongoose.Schema(
    {
ism:String,
familiya:String,
age:{type:Number},
rate:{type:Number},
time:{type:Date,default:Date.now}        
    }
));
export default Data;