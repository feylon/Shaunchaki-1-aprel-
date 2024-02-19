import User from "../models/data3.js";
import { Router } from "express";
const router = Router();
router.delete("/:id",async (req,res)=>{
    console.log(req.params);
   


    const existUser = await User.findByIdAndDelete(req.params.id);
    if(!existUser){
        res.status(427).send(
            {
                error:"Mavjud emas"
            }
        );
        return;
    }
    res.send(existUser)

})
export default router;