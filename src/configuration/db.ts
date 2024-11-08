import mongoose from "mongoose";

export async function dbConnection(): Promise<void | Error> {
    try {
        await mongoose.connect("mongodb://localhost:27017/petbuddy");
        console.log("Connected successfully");
        
    } catch (error) {
        throw new Error(`Unable to connect to the database ${error}`)
    }
}