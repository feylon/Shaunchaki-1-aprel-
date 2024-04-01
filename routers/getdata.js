import User from "../models/data3.js"
import { Router } from "express";
import Auth from "../middlewares/index.js"
const router = Router();
router.get("/", Auth, async (req,res)=>
{
const data = await  User.find();
// let data = [1,3,4,5,5,6];
res.status(200).send(data);

});
export default router;