const TravelExperience = require('../models/experienceModel');
const mongoose = require('mongoose');

// get all travel experiences
const getExperiences = async (req, res) => {
  const travelExperience = await TravelExperience.find({}).sort({
    createdAt: -1,
  });

  res.status(200).json(travelExperience);
};

// get one travel experience
const getExperience = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: 'This travel experience does not exist, sorry' });
  }

  const travelExperience = await TravelExperience.findById(id);

  if (!travelExperience) {
    return res
      .status(404)
      .json({ error: 'This travel experience does not exist, sorry' });
  }
  res.status(200).json(travelExperience);
};

// create a new travel experience
const createExperience = async (req, res) => {
  const { name, title, body } = req.body;

  // add document to DB
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
};

// delete a travel experience
const deleteExperience = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: 'This travel experience does not exist, sorry' });
  }
  const travelExperience = await TravelExperience.findOneAndDelete({ _id: id });

  if (!travelExperience) {
    return res
      .status(404)
      .json({ error: 'This travel experience does not exist, sorry' });
  }
  res.status(200).json(travelExperience);
};

// update a travel experience
const updateExperience = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: 'This travel experience does not exist, sorry' });
  }
  const travelExperience = await TravelExperience.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  if (!travelExperience) {
    return res
      .status(404)
      .json({ error: 'This travel experience does not exist, sorry' });
  }
  res.status(200).json(travelExperience);
};

module.exports = {
  getExperiences,
  getExperience,
  createExperience,
  deleteExperience,
  updateExperience,
};
