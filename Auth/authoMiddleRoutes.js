
const jwt=require('jsonwebtoken')
require('dotenv').config();


const protect=(req,res)=>{
    const token=req.headers.authorization?.split('')[1];
    if(!token)
        return req.status(401).json({message:'Acces Denied no token'});
    try{
      const decode=jwt.verify(token,process.env.JWT_SECRET)
      req.user=decode;
      next()
    }
    catch(err){
    req.status(500).json({message:'Invalid token '})
    }

}
module.exports=protect;