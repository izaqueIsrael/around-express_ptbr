const express = require('express');

const userRouter = express.Router();

const { getUsers, getUserById, createUser } = require('../controllers/users');

userRouter.get('/', getUsers);
userRouter.patch('/', createUser);
userRouter.get('/:userId', getUserById);

module.exports = userRouter;
