import express from "express"
import { connectdb } from "./config/db.js"
import dotenv from "dotenv"
import useroutes from './config/routes/useroutes.js'
import cors from 'cors'
import path from 'path'

const app=express()
dotenv.config()
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use(express.json())



app.use('/api/auth',useroutes)

 if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectdb().then(()=>{
    app.listen(PORT,()=>{
    console.log("server is listen on port 5000")
    
})
})
