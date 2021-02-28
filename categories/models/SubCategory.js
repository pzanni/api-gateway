const mongoose = require('mongoose');

const { Schema } = mongoose;

const subCategorySchema = new Schema({
  name: {
    type: String,
  },
  categoryId: {
    type: String
  }
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;