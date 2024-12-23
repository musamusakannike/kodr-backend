const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./config/db.config");

connectDB();

// Middleware
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/auth", require("./routes/auth.route"));

module.exports = app;
