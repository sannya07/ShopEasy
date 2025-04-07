import express from "express";
import {registerController,loginController,testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
const router=express.Router();

// routes

// register 
router.post('/register', registerController)
// login
router.post('/login', loginController);

// test route
router.get('/test',requireSignIn ,isAdmin,testController);
export default router;