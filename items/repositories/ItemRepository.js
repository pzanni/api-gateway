const Item = require('../models/Item');

class ItemRepository {

  constructor(model) {
    this.model = model;
  }

  create(newItem) {
    const item = new this.model(newItem);
    return item.save();
  }

  find(condition) {
    return this.model.find(condition);
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

module.exports = new ItemRepository(Item);
