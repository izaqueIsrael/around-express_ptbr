const express = require('express');

const userRouter = express.Router();

const { getUsers, getUserById, createUser } = require('../controllers/users');

userRouter.get('/', getUsers);
userRouter.patch('/', createUser);
userRouter.get('/:_id', getUserById);

module.exports = userRouter;
