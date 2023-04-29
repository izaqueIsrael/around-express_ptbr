const express = require('express');
const path = require('path');
const fs = require('fs');

const cardRouter = express.Router();

const getCards = async (req, res) => {
  try {
    const data = await fs.promises.readFile(path.join(__dirname, '../data/cards.json'));
    res.send(JSON.parse(data));
  } catch (err) {
    res.status(500).send({ error: 500, message: 'Cards not found', log: err });
  }
};

cardRouter.get('/', getCards);

module.exports = cardRouter;
