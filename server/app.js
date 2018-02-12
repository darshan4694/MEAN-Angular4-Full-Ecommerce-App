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

app.post('/signin', (req, res)=>{
    console.log(req.body);
    db.signinVerification(req.body).then((data)=> {
        res.json({
            success : true,
            msg : data,
            username : req.body.username
        })
    }).catch((err) => {
        res.json({
            success : false,
            msg : err,
            username : null
        })
    });
})

app.get('/users/:uname', (req, res) => {
    db.getUserByUsername(req.params.uname).then((data)=> {
        console.log(data);
        res.json({
            success : true,
            data : data
        });
    }).catch((err) => {
        res.json({
            success : false,
            data : err
        });
    });
})

app.listen(2000, () => {
    console.log("2000 running");
})