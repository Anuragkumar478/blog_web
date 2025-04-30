const express=require('express')
const router=express.Router();
const blogModel=require('../model/blog')

router.put('/title/:title' ,async(req,res)=>{
    try{
       const updateBlog=await blogModel.findOneAndUpdate({title:req.params.title},req.body,{new:true})
       if(!updateBlog){
        res.status(404).json({message:'that is not find'})
    }
    res.status(200).json({message:'blog deleted succesfully',updateBlog})
  }
    
    catch(err){
        console.log('that is not find');
        res.status(500).json({message:'that is not find',err})
    }
})
module.exports = router;