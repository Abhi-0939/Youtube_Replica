import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
       const connectopnInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`MongoDB connected :), DB HOST : ${connectopnInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connectoin failed", error);
        process.exit(1)
    }
}

export default connectDB

