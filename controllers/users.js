const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .orFail()
    .then((users) => res.status(201).send({ users }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

const getUserById = (req, res) => {
  User.findOne({ _id: req.params.userId })
    .orFail()
    .then((user) => {
      if (!user) {
        res.status(404).send({ error: 'ID do usuário não encontrado' });
        return;
      }
      res.status(200).send({ user });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({
    _id: req.user._id,
    name,
    about,
    avatar,
  })
    .then((user) => res.status(201).send({ user }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

const changeProfile = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true })
    .orFail()
    .then((user) => res.status(201).send({ user }))
    .catch((err) => res.status(404).send({ message: err.message }));
};

const changeAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true })
    .orFail()
    .then((user) => res.status(201).send({ user }))
    .catch((err) => res.status(404).send({ message: err.message }));
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  changeProfile,
  changeAvatar,
};
