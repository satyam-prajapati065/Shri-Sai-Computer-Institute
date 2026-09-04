import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/shri_sai_institute';

  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 2500, // Timeout quickly if local mongo is not running
    });
    isConnected = true;
    console.log(`[Database] MongoDB Connected successfully to ${conn.connection.host}`);
  } catch (error) {
    isConnected = false;
    console.warn(`[Database] MongoDB connection note: ${error.message}. Running with safe fallback storage.`);
  }
};

export const getDBStatus = () => isConnected;
