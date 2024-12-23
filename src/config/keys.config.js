require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 3000;
const GEMINI_KEY = process.env.GEMINI_KEY;

module.exports = { MONGO_URI, JWT_SECRET, PORT, GEMINI_KEY };
