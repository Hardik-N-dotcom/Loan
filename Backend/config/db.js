import mongoose from "mongoose";
export const connectdb=async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI)
        console.log("database connect successfully")
        
    } catch (error) {
        console.log("connection error",error)
        
    }
}