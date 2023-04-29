const express = require('express');
const path = require('path');
const fs = require('fs');

const userRouter = express.Router();

const getUsers = async (req, res) => {
  try {
    const data = await fs.promises.readFile(path.join(__dirname, '../data/users.json'));
    res.send(JSON.parse(data));
  } catch (err) {
    res.send(err);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fs.promises.readFile(path.join(__dirname, '../data/users.json'));
    const user = JSON.parse(data).find(({ _id: userId }) => userId === id);
    if (user) {
      res.send({ data: user });
    } else {
      res.status(404).send({ error: 'ID do usuário não encontrado' });
    }
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);

module.exports = userRouter;
