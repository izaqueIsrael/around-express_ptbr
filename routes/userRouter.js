const express = require('express');

const userRouter = express.Router();

const { getUsers, getUserById, createUser } = require('../controllers/users');

userRouter.get('/users', getUsers);
userRouter.patch('/users', createUser);
userRouter.get('/users/:userId', getUserById);

module.exports = userRouter;
