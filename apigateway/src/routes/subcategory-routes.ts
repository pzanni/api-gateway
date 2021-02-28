const express = require('express');
const axios = require('axios');

const app = express.Router();
const API_URL = 'http://localhost:8060/subcategories';

app.get('/category/:id', (req: any, res: any) => {
    const { id } = req.params;
    axios.get(`${API_URL}/category/${id}`).then((resp: any) => {
        console.log(resp.data);
        res.send(resp.data);
    });
});

module.exports = app;