const express = require('express');

const cardRouter = express.Router();

const { getCards, createCard, deleteCard } = require('../controllers/card');

cardRouter.get('/cards', getCards);
cardRouter.post('/cards', createCard);
cardRouter.delete('/cards/:cardId', deleteCard);

module.exports = cardRouter;
