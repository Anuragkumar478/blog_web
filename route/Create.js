const express=require('express')
const router=express.Router();
const blogModel=require('../model/blog');
const upload=require('../MulterMiddleWare/multMiddleware');


router.post('/create',upload.single('image'), async(req,res)=>{
   
    try{
        const newblog=new blogModel({
            ...req.body,
          image:req.file?req.file.filename:null,
        });
        const savItem=await newblog.save();
        res.status(200).json(savItem);
     }
     catch(error){
        console.log('that is not save',error);
         res.status(500).json({message : 'that is not saved' , error })
     }
});



module.exports=router;