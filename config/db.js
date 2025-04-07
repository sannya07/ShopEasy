import mongoose from "mongoose"

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`connected to MongoDb`.bgGreen.white)
    } catch (error) {
        console.log(`Error in MongoDB connection ${error}`.bgRed.white)
    }
}

export default connectDB;