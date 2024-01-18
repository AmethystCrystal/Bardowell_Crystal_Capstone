const express = require('express');
const TravelExperience = require('../models/travelExperienceModel');

const router = express.Router();

// GET all travel experiences
router.get('/', (req, res) => {
  res.json({ msg: 'GET all travel experiences' });
});

// GET one travel experience
router.get('/:id', (req, res) => {
  res.json({ msg: 'GET one travel experience' });
});

// POST a new travel experience
router.post('/', async (req, res) => {
  const { name, title, body } = req.body;

  try {
    const travelExperience = await TravelExperience.create({
      name,
      title,
      body,
    });
    res.status(200).json(travelExperience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a travel experience
router.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE a travel experience' });
});

// UPDATE a travel experience
router.patch('/:id', (req, res) => {
  res.json({ msg: 'UPDATE a travel experience' });
});

module.exports = router;
