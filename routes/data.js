// routes/data.js
const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

// Create
router.post('/', async (req, res) => {
  try {
    const newData = new Data(req.body);
    await newData.save();
    res.status(201).send(newData);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const updatedData = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedData);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    await Data.findByIdAndDelete(req.params.id);
    res.send({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
