// Import the mongoose module
import mongoose from "mongoose";
import { logger } from "../utils/logger.js";

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
export default async function mongoConfig() {
  mongoose.set("strictQuery", false);

  const connectionString = process.env.MONGO_URI ?? "mongodb://localhost";

  try {
    await mongoose.connect(connectionString);
    logger.info("Connected to Mongo Database");
  } catch (err) {
    console.log(err);
    await mongoose.connection.close();
  }
}
