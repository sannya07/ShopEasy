import { compare } from "bcrypt";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const registerController = async(req, res) => {
    try {
        const {name,email,password,phone,address}=req.body
        // validation
        if(!name){
            return res.send({error: 'Name is required'})
        }
        if(!email){
            return res.send({error: 'email is required'})
        }
        if(!password){
            return res.send({error: 'password is required'})
        }
        if(!phone){
            return res.send({error: 'Phone number is required'})
        }
        if(!address){
            return res.send({error: 'Address is required'})
        }

        // existing user
        const existingUser=await userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:"Already registered! please login"
            })
        }
        // new user
        const hashedPassword=await hashPassword(password)

        const user=await new userModel({name,email,password: hashedPassword,phone,address}).save()
        res.status(201).send({
            success:true,
            message:"User registered successfully!",
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in register controller'
        })
    }
};

export const loginController=async(req,res)=>{
    try {
        const{email,password}=req.body;
        // validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid email or password!'
            })
        }
        // check user
        const user=await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"email is not registered"
            })
        }
        const match=await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"invalid password!"
            })
        }
        const token= await jwt.sign({_id:user._id}, process.env.JWT_SECRET,{expiresIn:'7d'});
        res.status(200).send({
            success:true,
            message:'login successfully',
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address
            },
            token,
        })
    }catch (error) {
        console.log(object)
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
    }
}

export const testController=(req,res)=>{
    res.send('protected route')
}

