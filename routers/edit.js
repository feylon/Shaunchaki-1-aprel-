import Data from "../models/data3.js";
import { Router } from "express";
import Joi from "joi";
const router = Router();

router.patch("/:id",async (req, res)=>{
    let EditChecker = Joi.object({
        ism:Joi.string().min(5).max(10).required(),
        familiya:Joi.string().min(5).max(10).required(),
        age:Joi.number().required(),
        rate:Joi.number().required()
    });
    
    let bool = EditChecker.validate(req.body);
    if(bool.error){
        res.status(400).send({error:bool.error.message});
        return;
    }
    try{
    let {ism, familiya, age, rate} = req.body;
    console.log(req.params)
    let hasdata = await Data.findByIdAndUpdate(req.params.id,{ism, familiya, age, rate});
    console.log(hasdata)
    if(!hasdata){
        console.log("Mavjud emas");
        res.status(400).send({error:"Mavjud emas"});
        return
    }
    console.log(req.params.id);
    const data = await Data.findById(req.params.id);
    res.send(data)}
    catch(err){
        console.log(err)
    }
});

export default router;