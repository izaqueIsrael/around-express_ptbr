const express = require('express');
const path = require('path');
const fs = require('fs');

const userRouter = express.Router();

const getUser = async (req, res) => {
  try {
    const data = await fs.promises.readFile(path.join(__dirname, '../data/users.json'));
    res.send(JSON.parse(data));
  } catch (err) {
    res.send(err);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const data = await fs.promises.readFile(path.join(__dirname, '../data/users.json'));
  const user = JSON.parse(data).find(({ _id: userId }) => userId === id);
  try {
    res.send({ data: user });
  } catch (err) {
    res.send({ error: err, message: 'ID do usuário não encontrado' });
  }
};

userRouter.get('/', getUser);
userRouter.get('/:id', getUserById);

module.exports = userRouter;
