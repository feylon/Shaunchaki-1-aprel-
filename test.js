import mongoose from "mongoose";

(async ()=>{
try {
    await mongoose.connect("mongodb://localhost/test3");
} catch (error) {
    console.log(error)
}
})();
(async()=>{
    const Student = mongoose.model("data3", new mongoose.Schema(
        {
    ism:String,
    familiya:String,
    age:{type:Number},
    rate:{type:Number},
    time:{type:Date,default:Date.now}        
        }
    ));
    const student = new Student({
        age:29,
        ism:"Shoxsanam",
        familiya:"Isoqova",
        rate:99
    });
    try {
        let data = await Student.findById("65ce76aa49a5c817504f92b4");
        console.log(data)
    } catch (error) {
        // console.log(error)
    }


})();