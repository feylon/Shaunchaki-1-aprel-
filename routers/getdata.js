import User from "../models/data3.js"
import { Router } from "express";
const router = Router();
router.get("/", async (req,res)=>
{
const data = await  User.find();
res.status(200).send(data);

});
export default router;