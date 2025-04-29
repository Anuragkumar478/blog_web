const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    
    gmail: {
        type: String,
        required: true
    },
    password:{
       type:String,
       required:true
    }
  
});

const personModel = mongoose.model('personModel', PersonSchema); // ✅ Mongoose model
module.exports = personModel ; // ✅ Export the model, not schema