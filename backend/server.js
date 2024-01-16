require('dotenv').config();

const express = require('express');
const testRoutes = require('./routes/testRoutes');

const app = express();

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/testRoutes', testRoutes);

app.listen(process.env.PORT, () => {
  console.log('Listening on port 4000');
});
