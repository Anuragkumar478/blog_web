const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    }, 
    email: {
        type: String,
        required: true,
        unique:true
    },
    password:{
       type:String,
       required:true
    } }, 
    {

    timestamps: true }
  
);

const personModel = mongoose.model('personModel', PersonSchema); // ✅ Mongoose model
module.exports = personModel ; // ✅ Export the model, not schema