const express = require('express');

const app = express.Router();
const repository = require('../repositories/UserRepository');

app.get('/', (req, res) => {
  repository.findAll().then((users) => {
    res.json(users);
  }).catch((error) => console.log(error));
});

app.post('/', (req, res) => {
  const { name } = req.body;
  repository.create(name).then((user) => {
    res.json(user);
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
  const user = { name: req.body.name };
  repository.updateById(id, user)
    .then(res.status(200).json([]))
    .catch((error) => console.log(error));
});
module.exports = app;