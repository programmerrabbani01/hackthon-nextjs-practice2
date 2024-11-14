import mongoose from "mongoose";

// Create MongoDB connection with options
const mongoDBConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string, {
      serverSelectionTimeoutMS: 10000, // Timeout after 10s
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    if (error instanceof Error) {
      console.log("MongoDB connection error:", error.message);
    } else {
      console.log("Unknown error occurred during MongoDB connection");
    }
  }
};

export default mongoDBConnection;
