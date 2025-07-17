import User from "../models/usermodels.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"



export const signup=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        if(!name||!email||!password){
          return  res.json({success:false,message:"please fill all the details"})
        }
        const extinguser=await User.findOne({email})
        if(extinguser){
          return  res.json({success:false,message:"user already exists"})
        }
        const hashpassword= await bcrypt.hash(password,10)
        const user =await User.create({name,email,password:hashpassword})              
        const token=jwt.sign({
            userid:user._id,
            name:user.name,
            email:user.email,
            
        },
        process.env.JWT_SECRET,
        {
            expiresIn:'7d'
        }
    ) 
      
    
        return res.json({success:true,message:"user created successfully",token,user:{
            id:user._id,
            name:user.name,
            email:user.email,
            isVerified: user.isVerified,
        
        }})
     

    } catch (error) {
        console.log(error)
        return res.json({success:false,message:"server error"})
        
    }

}
export const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        if(!email ||!password){
            return res.json({success:false,message:"please fill all the details"})
        }
        const user=await User.findOne({email})
        if(!user){
            return res.json({success:false,message:"please signup"})
        }
        const decodepassword=await bcrypt.compare(password,user.password)
        if(!decodepassword){
            return res.json({success:false,message:"please enter valid password"})
        }
        const token=jwt.sign({
            userid:user._id,
            name:user.name,
            email:user.email,
            
        },
        process.env.JWT_SECRET,{
            expiresIn:'7d'
        }
    )
    return res.json({success:true,message:"Login successfully",token,user:{
        id:user._id,
        name:user.name,
        email:user.email,
        isVerified: user.isVerified,
    }})  
    } catch (error) {
        console.log(error)
        return res.json({success:false,message:"server error"})
        
    }
}

export const allusers=async(req,res)=>{
    try {
        const users=await User.find()
        return res.status(200).json({success:true,users})

        
    } catch (error) {
        console.log("server error",error)
        return res.status(500).json({success:false,message:"user fetch error"})
        
    }
}



// ✅ Add this to your authcontroller.js
export const logout = async (req, res) => {
  try {
    // If using cookies: res.clearCookie('token');
    return res.json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Logout failed' });
  }
};





export const userinfo = async (req, res) => {
  try {
    const user = await User.findById(req.user.userid).select("-password");
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: "User not found" });
  }
};


