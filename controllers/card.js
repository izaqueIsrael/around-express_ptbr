const mongoose = require('mongoose');
const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.status(201).send({ cards }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

const createCard = async (req, res) => {
  const { name, link } = req.body;
  const newId = await new mongoose.Types.ObjectId();
  Card.create({
    _id: newId,
    name,
    link,
    owner: req.user._id,
  })
    .then((card) => res.status(201).send({ data: card }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

const deleteCard = (req, res) => {
  Card.findOneAndRemove({ _id: req.params.cardId, owner: req.user._id })
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Its not your card' });
        return;
      }
      res.status(201).send({ data: card });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports = { getCards, createCard, deleteCard };
