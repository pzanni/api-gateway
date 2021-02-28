const express = require('express');
const axios = require('axios');

const app = express.Router();
const API_URL = 'http://localhost:8080/items';

app.get('/', (req: any, res: any) => {
    axios.get(API_URL).then((resp: any) => {
        console.log(resp.data);
        res.send(resp.data);
    });
});

app.get('/subcategory/:id', (req: any, res: any) => {
    const { id } = req.params;
    console.log(`${API_URL}/subcategory/${id}`)
    axios.get(`${API_URL}/subcategory/${id}`).then((resp: any) => {
        console.log(resp.data);
        res.send(resp.data);
    });
});

module.exports = app;