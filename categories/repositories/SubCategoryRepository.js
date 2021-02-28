const SubCategory = require('../models/SubCategory');

class SubCategoryRepository {

  constructor(model) {
    this.model = model;
  }

  create(name, categoryId) {
    const newCategory = { name, categoryId };
    const category = new this.model(newCategory);
    return category.save();
  }

  findAll() {
    return this.model.find();
  }

  findById(id) {
    return this.model.findById(id);
  }

  find(condition) {
    return this.model.find(condition);
  }

  deleteById(id) {
    return this.model.findByIdAndDelete(id);
  }

  updateById(id, object) {
    const query = { _id: id };
    return this.model.findOneAndUpdate(query, { $set: { name: object.name } });
  }
}

module.exports = new SubCategoryRepository(SubCategory);
