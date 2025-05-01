const express=require('express');
const bcyrpt=require('bcrypt');
const jwt =require('jsonwebtoken');
const personModel =require('../model/person');
const { name } = require('ejs');
require('dotenv').config();

const router=express.Router();

router.post('/login',async(req,res)=>{
    const{email,password}=req.body;
    try{
      const user= await personModel.findOne({email});
      if(!user)res.status(404).json({message:'user not found'})
     
        const isMatch=await bcyrpt.compare(password,user.password);
        if(!isMatch)res.status(401).json({message:'invalid credential'})

            const token=jwt.sign(
                {id:user_id},
                process.env.JWT_SECRET,
                {expiresIn:process.env.JWT_EXPIRES_IN}
            );
            res.status(200).json({token,user:{name:user.name , email:user.email}})
    }
    catch(err){
        res.status(500).json({message: err.message })
    }
})
module.exports=router;