import mongoose from "mongoose";
const userschema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
}, 
{timestamps:true}
)
const User=mongoose.model("User",userschema)
export default User