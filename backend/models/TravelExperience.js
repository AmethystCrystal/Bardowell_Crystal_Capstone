const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const travelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});
