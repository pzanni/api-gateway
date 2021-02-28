const express = require('express');

const app = express.Router();
const repository = require('../repositories/ItemRepository');

app.get('/', (req, res) => {
  repository.findAll().then((items) => {
    res.json(items);
  }).catch((error) => console.log(error));
});

app.get('/subcategory/:id', (req, res) => {
  const { id } = req.params;
  repository.find({ subCategoryId: id }).then((items) => {
    res.json(items);
  }).catch((error) => console.log(error));
});

app.post('/', (req, res) => {
  const { name, description, subCategoryId } = req.body;
  repository.create({ name, description, subCategoryId }).then((item) => {
    res.json(item);
  }).catch((error) => console.log(error));
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;
  repository.deleteById(id).then((ok) => {
    console.log(ok);
    console.log(`Deleted record with id: ${id}`);
    res.status(200).json([]);
  }).catch((error) => console.log(error));
});

app.put('/:id', (req, res) => {
  const { id } = req.params;
  const item = { name: req.body.name };
  repository.updateById(id, item)
    .then(res.status(200).json([]))
    .catch((error) => console.log(error));
});
module.exports = app;