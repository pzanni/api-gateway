const User = require('../models/User');

class UserRepository {

  constructor(model) {
    this.model = model;
  }

  create(name) {
    const newUser = { name };
    const user = new this.model(newUser);

    return user.save();
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

module.exports = new UserRepository(User);
