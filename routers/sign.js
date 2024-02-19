import {Router} from "express";
import User from "../models/index.js";
import Joi from "joi";
const router = Router();

router.post("/", async(req,res)=>{
const SignCheckSchema = Joi.object(
    {
        ism:Joi.string().min(5).max(100).required(),
        familiya:Joi.string().required().min(5).max(100),
        age:Joi.number().required(),
        login:Joi.string().required().min(5).max(10),
        password:Joi.string().required().min(5).max(10),
    }
    );
    let bool = SignCheckSchema.validate(req.body);
    if(bool.error){
        res.status(400).send(bool.error.message);
        return false;
    }
    
try{

    const {ism,familiya,age,login,password} = req.body;
    
    const isHas = await User.findOne({login:login.toLowerCase()});
    if(isHas){
        res.status(401).send({info:"Ro'yxatdan o'tilgan email"});
        return;
    }
    await User.create({ism,familiya,age,login:login.toLowerCase(),password});
    
    res.status(201).send({success:true});

}
catch(err){
console.log(err);
}


});
export default router;