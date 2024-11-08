import mongoose from "mongoose"
import { dbConnection } from "../configuration/db";

jest.mock('mongoose');

describe("Database Connection", ()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
    })
    it("Should connect to the database successfully",async ()=>{
        (mongoose.connect as jest.Mock).mockResolvedValue("");
        jest.spyOn(console, 'log').mockReturnValue();
        await dbConnection();
        expect(mongoose.connect).toHaveBeenCalledWith("mongodb://localhost:27017/petbuddy");
        expect(console.log).toHaveBeenCalledWith("Connected successfully");

        jest.resetAllMocks();

    })

    it("Should throw error if database connection fails", async()=>{
        (mongoose.connect as jest.Mock).mockRejectedValue(new Error("Unable to connect to the database"));
        await expect(dbConnection()).rejects.toThrow("Unable to connect to the database");
    })
})