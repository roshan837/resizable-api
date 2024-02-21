// Import necessary packages
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dataRoutes = require("./routes/data");
// Initialize Express app
const app = express();

// Change request body in json format
app.use(bodyParser.json());

// Allow client make api calls
app.use(cors());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://roshan5050:roshan5050@cluster0.md0cpyx.mongodb.net/?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Add data routes
app.use("/data", dataRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
