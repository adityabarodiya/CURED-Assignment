// app.js
const express = require('express');
const db = require('./db');
const dataRoutes = require('./routes/data');

const app = express();

app.use(express.json());
app.use('/data', dataRoutes);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
