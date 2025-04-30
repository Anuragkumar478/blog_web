const express = require('express');
const router = express.Router();
const blogModel=require('../model/blog')


router.delete('/title/:title',async(req,res)=>{
  try{
    const deletBlog= await blogModel.findOneAndDelete({title : req.params.title});
    if(!deletBlog){
        res.status(404).json({message:'that is not find'})
    }
    res.status(200).json({message:'blog deleted succesfully'})
  }
  catch(err){
    console.log('that is not find');
    res.status(500).json({message:'that is not find',err})
  }
})

module.exports = router;