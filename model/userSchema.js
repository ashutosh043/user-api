const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({
     
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:15
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error("Email is not valid")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    address:{
        type:String,
        required:true
    }


});

 const user = new mongoose.model('userData', userSchema);


 module.exports = user;


