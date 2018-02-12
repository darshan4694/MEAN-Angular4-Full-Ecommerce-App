const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    db = require('./db'),
    jwt = require('jsonwebtoken');


app.use(bodyParser.json());
app.use(cors());

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
    var token = jwt.sign({'uname': req.body.username}, 'marlabs-secret-key', {
        expiresIn: '1h'
    });
    db.signinVerification(req.body).then((data)=> {
        res.json({
            success : true,
            msg : data,
            username : req.body.username,
            'token' : token
        })
    }).catch((err) => {
        res.json({
            success : false,
            msg : err,
            username : null
        })
    });
})

app.use((req, res, next)=> {
    var token = req.headers.authorization;
    jwt.verify(token, 'marlabs-secret-key', (err, decoded)=> {
        if(err) {
            console.log('Error');
        } else  {
            req.decoded = decoded;
            console.log(req.decoded);
            next();
        }
    })
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

app.get('/getuser', (req, res) => {
    res.json({
        msg: "hello"
    })
})

app.listen(2000, () => {
    console.log("2000 running");
})