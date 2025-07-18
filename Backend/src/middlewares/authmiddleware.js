import jwt from 'jsonwebtoken'
export const requireauth=(req,res,next)=>{
    const authHeader=req.headers.authorization
    if(!authHeader){
        return res.status(401).json({success:false,message:"no token provided"})

    }
    const token=authHeader.split(' ')[1];
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next()
        
    } catch (error) {
        return res.status(403).json({success:false,message:"Invalid token"})
        
    }

}