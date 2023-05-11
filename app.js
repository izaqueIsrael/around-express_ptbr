const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const { PORT = 3000 } = process.env;

const cardRouter = require('./routes/cardRouter');
const userRouter = require('./routes/userRouter');
const absentRouter = require('./routes/absentRouter');

app.use('/cards', cardRouter);
app.use('/users', userRouter);
app.use('/*', absentRouter);

app.use((req, res, next) => {
  req.user = {
    _id: '5d8b8592978f8bd833ca8133',
  };
  next();
});

app.listen(PORT);
