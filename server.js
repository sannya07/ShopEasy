import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from 'cors';

dotenv.config();

connectDB();
const app=express();

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


app.use('/api/v1/auth', authRoutes)

app.get('/',(req,res)=>{
    res.send({
        message: "Welcome to demo ecom"
    })
})
const PORT=process.env.PORT || 3002;
app.listen(PORT,()=>{
    console.log(`App is listenig at PORT: ${PORT} on mode ${process.env.DEV_MODE}`.bgCyan.white)
})