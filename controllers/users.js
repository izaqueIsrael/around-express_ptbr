const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(201).send({ users }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

const getUserById = (req, res) => {
  User.findOne({ _id: req.params._id })
    .then((user) => {
      if (!user) {
        res.status(404).send({ error: 'ID do usuário não encontrado', data: user, datas: req.params._id });
        return;
      }
      res.status(201).send({ data: user });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

const createUser = (req, res) => {
  const { nome, sobre, avatar } = req.body;
  User.create({ nome, sobre, avatar })
    .then((user) => res.status(201).send({ data: user }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports = { getUsers, getUserById, createUser };
