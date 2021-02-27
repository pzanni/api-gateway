const Review = require('../models/Review');

class ReviewRepository {

  constructor(model) {
    this.model = model;
  }

  create(review) {
    const newReview = new this.model(review);
    return newReview.save();
  }

  findAll() {
    return this.model.find();
  }

  findById(id) {
    return this.model.findById(id);
  }

  deleteById(id) {
    return this.model.findByIdAndDelete(id);
  }

  updateById(id, object) {
    const query = { _id: id };
    return this.model.findOneAndUpdate(query, { $set: { name: object.name } });
  }
}

module.exports = new ReviewRepository(Review);
