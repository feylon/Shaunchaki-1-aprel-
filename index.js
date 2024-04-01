import express from "express";
import Joi from "joi";
import cors from "cors"
import bucrypt from "bcrypt";
import * as dotenv from "dotenv" ;
import mongoose from "mongoose";

//*routerlar
import login from "./routers/login.js";
import sign from "./routers/sign.js";
import edit from "./routers/edit.js";
import delete1 from "./routers/delete.js";
import getdata from "./routers/getdata.js";
const app = express();

dotenv.config();
app.use(express.json())
app.use(express.static("public"))
app.use(cors());

//*routerlar
app.use("/login",login);
app.use("/sign",sign);
app.use("/edit",edit);
app.use("/delete",delete1);
app.use("/get",getdata);

(async ()=>{
    try {
        await mongoose.connect("mongodb://localhost/test3");
        console.log(`
        /login : method:"Post", login, password
        /sign : method :"Post",   ism, familiya, login, password,
        /edit  : method : "patch", ism, familiya, rate, age 
        /delete/:id : method : "delete"
        /get    : method : "get"  

        `)
    }
    catch(err){
        console.log(err, "Mongodbga ulanishda xatolik");
    }
})();

console.log(process.env.PORT)
app.listen(4100,()=>{
    console.log("Ishga tushdi")
})