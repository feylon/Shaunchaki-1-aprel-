import  Jwt  from "jsonwebtoken";
export default function (req, res, next){
        let token = req.header("-x-auth");
        if(!token) return res.status(401).send("Token yo'q");;
       try {
        let decoded = Jwt.verify(token,"salom") ;
        console.log(decoded);
        // res.status(200).send(decoded);
        next();
       } catch (error) {
        console.log(error)
        return res.status(400).send("Yarqosiz token")    
       }
    }
    