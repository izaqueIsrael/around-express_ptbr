const mongoose = require('mongoose');
const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .orFail()
    .then((cards) => res.status(201).send({ cards }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  const newId = new mongoose.Types.ObjectId();
  Card.create({
    _id: newId,
    name,
    link,
    owner: req.user._id,
  })
    .orFail()
    .then((card) => res.status(201).send({ data: card }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

const deleteCard = (req, res) => {
  Card.findOneAndRemove({ _id: req.params.cardId, owner: req.user._id })
    .orFail()
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Its not your card' });
        return;
      }
      res.status(201).send({ data: card });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

const addLike = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.status(201).send({ data: card }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

const dislike = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.status(201).send({ data: card }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  addLike,
  dislike,
};
