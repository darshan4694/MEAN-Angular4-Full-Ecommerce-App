const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    db = require('./db');

app.use(bodyParser.json());
app.use(cors());

app.post('/create-user', (req, res)=> {
    console.log(req.body);
})

app.listen(2000, ()=> {
    console.log("2000 running");
})