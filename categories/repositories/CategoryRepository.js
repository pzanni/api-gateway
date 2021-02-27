const Category = require('../models/Category');

class CategoryRepository {

  constructor(model) {
    this.model = model;
  }

  create(name) {
    const newCategory = { name };
    const category = new this.model(newCategory);
    return category.save();
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

module.exports = new CategoryRepository(Category);
