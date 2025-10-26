import mongoose from "mongoose";

const connectDb=async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
        
    } catch (error) {
        console.error("Error in MongoDB connection:", error);
    }
}

export default connectDb