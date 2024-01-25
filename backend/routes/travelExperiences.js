const express = require('express');
const {
  createExperience,
  getExperiences,
  getExperience,
  deleteExperience,
  updateExperience,
} = require('../controllers/experienceController');

const router = express.Router();

// GET all travel experiences
router.get('/', getExperiences);

// GET one travel experience
router.get('/:id', getExperience);

// POST a new travel experience
router.post('/', createExperience);

// DELETE a travel experience
router.delete('/:id', deleteExperience);

// UPDATE a travel experience
router.put('/:id', updateExperience);

module.exports = router;
