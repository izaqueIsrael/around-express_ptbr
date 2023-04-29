const express = require('express');

const app = express();
const { PORT = 3000 } = process.env;

const cardRouter = require('./routes/cardRouter');
const userRouter = require('./routes/userRouter');
const absentRouter = require('./routes/absentRouter');

app.use('/cards', cardRouter);
app.use('/users', userRouter);
app.use('/*', absentRouter);

app.listen(PORT);
