// models/Data.js
const mongoose = require("mongoose");

// Define schema for data model
const dataSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

// Create mongoose model
const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
