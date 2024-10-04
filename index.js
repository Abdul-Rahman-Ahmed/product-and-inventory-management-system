require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const productRoute = require("./routes/products.route");
const { ERROR } = require("./utils/requestStatus");
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());

// Connect to mongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("connected to mongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit();
  }
};
connectDB();

// Configere Routes
app.use("/api/products", productRoute);

// Handel global errors
app.use((err, req, res, next) => {
  res.status(err.codeStatus || 500).json({
    status: res.errorStatus || ERROR,
    code: err.codeStatus || 500,
    message: res.Message || "An unexpected error occurred",
  });
});

// Run server
const PORT = process.env.PORT;
app.listen(PORT || 3000, () => {
  console.log("server is running on: " + (PORT || 3000));
});
