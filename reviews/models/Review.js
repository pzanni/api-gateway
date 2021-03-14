const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
  title: {
    type: String,
  },
  content: {
    type: String
  },
  itemId: {
    type: String,
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;