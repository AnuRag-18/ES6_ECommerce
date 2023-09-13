import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to MongoDb DatqBase ${conn.Connection.host}`);
    }
    catch(error){
        console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
}

export default connectDB;