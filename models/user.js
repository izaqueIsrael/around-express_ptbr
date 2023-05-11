/* eslint-disable prefer-regex-literals */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  about: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return RegExp(/^(http|https):\/\/[^ ']+$/).test(v);
      },
      message: 'Invalid Image URL',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
