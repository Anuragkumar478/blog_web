const mongoose= require("mongoose");

const blogSchema=new mongoose.Schema({
   title:String,
   content:String
})
const blogModel=mongoose.model('blogModel',blogSchema);
module.exports=blogModel;