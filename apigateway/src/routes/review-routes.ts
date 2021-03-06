const express = require('express');
const axios = require('axios');

const app = express.Router();
const API_URL = 'http://localhost:8050/reviews';

app.get('/', (req: any, res: any) => {
    axios.get(API_URL).then((resp: any) => {
        console.log(resp.data);
        res.send(resp.data);
    });
});

app.get('/item/:id', (req: any, res: any) => {
    const { id } = req.params;
    axios.get(`${API_URL}/item/${id}`).then((resp: any) => {
        console.log(resp.data);
        res.send(resp.data);
    });
});

module.exports = app;