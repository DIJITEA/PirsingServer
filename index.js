require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/pirsing-routes');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});

app.use(movieRoutes);