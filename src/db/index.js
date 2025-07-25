import dotenv from "dotenv";
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\nMONGODB CONNECTED !!! DB HOST : ${connectionInstance.connection.host}`);
        // console.log(`\nMONGODB CONNECTED !!! DB HOST : ${connectionInstance}`);

    } catch (error) {
        console.log("\nMONGODB CONNECTION ERROR : ", error);
        process.exit(1);
    }
}
export default connectDB;