import mongoose from "mongoose";


let User = mongoose.model("users",new mongoose.Schema(
    
    {
        ism:{type:String},
        familiya:{type:String},
        age:{type:Number},
        login:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        time:{type:Date,default:Date.now}
    }
    ));
(async ()=>{
    const Data = mongoose.models.data || mongoose.model("data", new mongoose.Schema(
        {
    ism:String,
    familiya:String,
    age:{type:Number},
    rate:{type:Number},
    time:{type:Date,default:Date.now}        
        }
    ));
    console.log("salom")
    await mongoose.connect("mongodb://localhost/test3");

    const bool = await Data.find();
    console.log(bool)
})
export default User;