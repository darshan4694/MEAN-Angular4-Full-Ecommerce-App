const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    db = require('./db');

app.use(bodyParser.json());
app.use(cors());

app.get('/getuser', (req, res) => {
    res.json({
        msg: "hello"
    })
})

app.post('/register', (req, res) => {
    console.log("in /register post");
    console.log(req.body);

    db.saveUser(req.body).then((data)=>{
        res.json({
            success: true
        })
    }).catch((err)=>{
        res.json({
            success: false
        })
    });
})

app.listen(2000, () => {
    console.log("2000 running");
})