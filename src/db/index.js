import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error("MONGODB_URI is not defined in environment variables.");
    process.exit(1);
  }

  if (!uri.startsWith("mongodb://") && !uri.startsWith("mongodb+srv://")) {
    console.error(
      'Invalid connection string format. It must start with "mongodb://" or "mongodb+srv://".'
    );
    process.exit(1);
  }

  try {
    const connectionInstance = await mongoose.connect(`${uri}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `\nMONGODB connected! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(`MONGODB connection FAILED, ERROR: ${error}`);
    process.exit(1);
  }
}

export { connectDB };
