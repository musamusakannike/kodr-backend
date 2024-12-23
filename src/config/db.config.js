const mongoose = require("mongoose");
const { MONGO_URI } = require("./keys.config");
require("dotenv").config();

const connectDB = async () => {
  const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
  };
  try {
    await mongoose.connect(MONGO_URI, clientOptions);
    console.log("Connected to database");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
