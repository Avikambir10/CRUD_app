import mongoose from "mongoose";

const connectMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connnected to mongo");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default connectMongoDB;