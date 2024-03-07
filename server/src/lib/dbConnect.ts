import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MOGODB_URL!,{
        dbName:"JD-Compiler",
    });
    console.log("Connection established")
  } catch (error) {
    console.log("Error in Connection",error)
  }
};
