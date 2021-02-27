const express = require('express');

const app = express.Router();
const repository = require('../repositories/CategoryRepository');

app.get('/', (req, res) => {
  repository.findAll().then((categories) => {
    res.json(categories);
  }).catch((error) => console.log(error));
});

app.post('/', (req, res) => {
  console.log(req.body)
  const { name } = req.body;
  repository.create(name).then((categories) => {
    res.json(categories);
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
  const category = { name: req.body.name };
  repository.updateById(id, category)
    .then(res.status(200).json([]))
    .catch((error) => console.log(error));
});
module.exports = app;