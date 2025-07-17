import express from "express"
import { signup,login,allusers, userinfo, logout } from "../controllers/authcontroller.js"
import { requireauth } from "../middlewares/authmiddleware.js"
const router =express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.get('/allusers',allusers)
router.get('/logout',logout)

router.get('/userinfo',requireauth,userinfo)


export default router