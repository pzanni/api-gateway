const express = require('express');
const axios = require('axios');

const app = express.Router();
const API_URL = 'http://localhost:8090/users';

app.get('/', (req: any, res: any) => {
    axios.get(API_URL).then((resp: any) => {
        console.log(resp.data);
        res.send(resp.data);
    });
});

module.exports = app;