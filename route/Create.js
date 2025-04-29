const express=require('express')
const router=express.Router();
const blogModel=require('../model/blog')

router.get('/test', (req, res) => {
    res.send('router is working!');
});
router.post('/create',async(req,res)=>{
    try{
        const newblog=new blogModel(req.body);
        const savItem=await newblog.save();
        res.status(200).json(savItem);
     }
     catch(error){
        console.log('that is not save',error);
         res.status(500).json({message : 'that is not saved' , error })
     }
});



module.exports=router;