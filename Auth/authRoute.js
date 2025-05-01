// const protect=require('./authoMiddleRoutes');

// router.get('/me',protect,async(req,res)=>{
//     try{
//     const user=await personModel.findById(req.user._id).select('-password')
//     req.status(200).json(user)
//     }
//     catch(err){
//         res.status(500).json({message:'err message'})
//     }
// })
