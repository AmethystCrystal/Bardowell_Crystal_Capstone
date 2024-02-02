require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const travelExperience = require('./routes/travelExperiences');
const corsOptions = {
  origin: 'https://travel-log-app1-81je960s8-amethystcrystals-projects.vercel.app/',
  credentials: true,
};
const app = express();

// middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/TravelExperiences', travelExperience);

// connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
