const express = require('express');

const cardRouter = express.Router();

const {
  getCards,
  createCard,
  deleteCard,
  addLike,
  dislike,
} = require('../controllers/card');

cardRouter.get('/', getCards);
cardRouter.post('/', createCard);
cardRouter.delete('/:cardId', deleteCard);
cardRouter.put('/:cardId/likes', addLike);
cardRouter.delete('/:cardId/likes', dislike);

module.exports = cardRouter;
