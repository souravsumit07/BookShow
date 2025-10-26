import express from "express"
import { Login, Register } from "../controllers/user.controller.js"
const userRouter=express()

userRouter.post("/login",Login)
userRouter.post("/register",Register)


export default userRouter