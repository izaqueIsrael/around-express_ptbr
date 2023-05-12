const express = require('express');

const userRouter = express.Router();

const {
  getUsers,
  getUserById,
  createUser,
  changeProfile,
  changeAvatar,
} = require('../controllers/users');

userRouter.get('/', getUsers);
userRouter.post('/', createUser);
userRouter.get('/:userId', getUserById);
userRouter.patch('/me', changeProfile);
userRouter.patch('/me/avatar', changeAvatar);

module.exports = userRouter;
