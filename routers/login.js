import { Router } from "express";
import Data from "../models/data3.js"
import User from "../models/index.js";
import Joi from "joi";
const router = Router();
router.post("/",async(req,res)=>{
const UserSchema = Joi.object({
    login: Joi.string().min(5).required().max(10),
    password:Joi.string().required().min(5).max(10)
});
if(UserSchema.validate(req.body).error){
    res.status(400).send(UserSchema.validate(req.body).error.message);
    return;
}

try {
   const {login, password} = req.body; 
  let UserExist = await User.findOne({login:login.toLowerCase()});
    if(!UserExist){
        res.status(401).send({content : "Login  xato"});
        return;
        
    }
    if(UserExist.password != password) {
        res.status(401).send({content : "Parol xato"});
        return;
        
    }
    
    let data = await Data.find();
    console.log(data)
    // await Data.findByIdAndUpdate("65cdbacee01bdcd9e2c1fe2a",{ism:"uzgardi"});
    res.status(200).send(data);
} catch (error) {
    console.log(error);
}



});
export default router;