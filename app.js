// não consegui seguir a exigencia de utilizar o endereço localhost para conectar com o banco
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const { PORT = 3000 } = process.env;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/aroundb';

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const cardRouter = require('./routes/cardRouter');
const userRouter = require('./routes/userRouter');
const absentRouter = require('./routes/absentRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '5d8b8592978f8bd833ca8133',
  };
  next();
});

app.use('/cards', cardRouter);
app.use('/users', userRouter);
app.use('/*', absentRouter);

app.listen(PORT);
