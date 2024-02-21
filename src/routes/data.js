// routes/data.js
const express = require("express");
const router = express.Router();
const Data = require("../models/Data");

let addCount = 0,
  updateCount = 0;
router.get("/count", (req, res) => {
  res.json({ addCount, updateCount });
});

// API to add new data
router.post("/add", async (req, res) => {
  try {
    const newData = req.body;
    const data = new Data(newData);
    await data.save();
    addCount++;
    res.status(200).json({ message: "Data added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// API to edit existing data
router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    if (id === "new") {
      const data = new Data(newData);
      await data.save();
    } else await Data.findByIdAndUpdate(id, newData);
    updateCount++;
    res.json({ message: "Data updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
