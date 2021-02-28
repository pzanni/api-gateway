const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  subCategoryId: {
    type: String
  }
});

const Todo = mongoose.model('Item', itemSchema);

module.exports = Todo;